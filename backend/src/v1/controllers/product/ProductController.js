const Product = require("../../models/product/Product");
const ProductFile = require("../../models/Product/ProductFile");
const ProductComment = require("../../models/product/ProductComment");
const Category = require("../../models/product/Category");

//### PRODUCT: xử lí trả dữ liệu theo form
async function handleRenderProducts(products, req, res) {
  //lấy theo số lượng
  let paginatedProducts; //danh sách cần lấy
  let page = req.query.page;
  let limitPage = req.query.limitPage;
  const startIndex = (page - 1) * limitPage;
  const endIndex = page * limitPage;
  const totalPages = Math.ceil(products.length / limitPage); //làm tròn lên số page
  if (page > totalPages) {
    res.status(404).json({
      code: 404,
      status: "Failed to find product",
    });
  } else {
    paginatedProducts = await products.slice(startIndex, endIndex);

    res.status(200).json({
      code: 200,
      status: "success",
      category: req.params.category ? req.params.category : "All",
      totalProduct: products.length,
      currentPage: page,
      totalPages: totalPages,
      productsPerPage: limitPage,
      data: paginatedProducts,
    });
  }
}

// Thêm sản phẩm mới
async function createProduct(req, res) {
  try {
    const category = await Category.findOne({ name: req.body.category });
    const router = await Product.findOne({ router: req.body.router });
    if (!category) {
      res.status(404).json({
        code: 404,
        status: "Category not found",
      });
    } else if (router) {
      res.status(404).json({
        code: 404,
        status: "router already exists",
      });
    } else if (category && !router) {
      let dateStart = new Date();
      let dateEnd = new Date();
      const product = await new Product({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        numView: 0,
        discount: req.body.discount,
        percent: req.body.percent,
        router: req.body.router,
        description: req.body.description,
        hashtags: req.body.hashtags,
        countInSold: req.body.countInSold,
        countPromotional: req.body.countPromotional,
        hidden: {
          status: false,
          time: {
            timeStart: dateStart, //ngày thêm sản phẩm vào thùng rác
            timeEnd: dateEnd.setDate(dateStart.getDate() + 15), //ngày xóa sản phẩm khỏi thùng rác,xóa vĩnh viễn
          },
        },
      });

      const page = new ProductFile({
        router: req.body.router,
        imagesFile: req.body.imagesFile,
        file: req.body.file,
      });

      await product.save(); // Lưu thông tin sản phẩm
      await page.save(); // Lưu thông tin page
      res.status(201).json({
        code: 201,
        status: "Create a successful new product",
        data: product,
      });
    }
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: `Failed to create new product`,
    });
  }
}

//Lấy danh sách tất cả sản phẩm
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();

    handleRenderProducts(products, req, res);
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: "Failed to fetch products",
    });
  }
}

//lấy page
async function getPage(req, res) {
  try {
    const page = await ProductFile.findOne({ router: req.params.router });
    res.send(`${page.file}`);
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: `Failed to fetch Page with id ${req.params.id}`,
    });
  }
}

// Lấy thông tin chi tiết sản phẩm theo id
async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    product
      ? res.status(200).json({
          code: 200,
          status: "Success",
          data: product,
        })
      : res.status(404).json({
          code: 404,
          status: "Failed to find product",
          data: [],
        });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: `Failed to fetch product with id ${req.params.id}`,
    });
  }
}

//lấy danh sách sản phẩm theo số lượng, danh mục, nếu thiếu 1 trong 2 tham số thì sẽ trả về toàn bộ của tham số còn lại
async function getProductsLimitCategory(req, res) {
  try {
    let products;
    if (req.params.category) {
      products = await Product.find({ category: req.params.category }).limit(
        req.query.limit
      );
    } else {
      products = await Product.find().limit(req.query.limit);
    }

    handleRenderProducts(products, req, res);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: `Failed to fetch products limit and category`,
    });
  }
}

//Sắp xếp tăng hoặc giảm sản phẩm theo danh mục dựa theo giá
async function sortProductsByCategory(req, res) {
  try {
    let products;
    if (req.params.category) {
      products = await Product.find({ category: req.params.category });
    } else {
      products = await Product.find();
    }
    const sortedProducts = await products.sort((a, b) => {
      if (req.query.sort === "asc") {
        if (req.query.sortBy === "price") {
          return a.price - b.price; //sắp xếp theo giá
        } else if (req.query.sortBy === "countInSold") {
          return a.countInSold - b.countInSold; //sắp xếp theo số lượng đã bán
        } else if (req.query.sortBy === "createdAt") {
          return a.createdAt - b.createdAt; //sắp xếp theo ngày tạo
        }
      } else if (req.query.sort === "desc") {
        if (req.query.sortBy === "price") {
          return b.price - a.price; //sắp xếp theo giá
        } else if (req.query.sortBy === "countInSold") {
          return b.countInSold - a.countInSold; //sắp xếp theo số lượng đã bán
        } else if (req.query.sortBy === "createdAt") {
          return b.createdAt - a.createdAt; //sắp xếp theo ngày tạo
        }
      }
    });

    handleRenderProducts(sortedProducts, req, res);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: `Failed to fetch products sortOrder`,
    });
  }
}


//Cập nhật thông tin MỘT sản phẩm
async function updateProduct(req, res) {
  try {
    const idProduct = await Product.findOne({ _id: req.params.id });
    const router = await ProductFile.findOne({ router: req.body.lastRouter });
    if (!idProduct) {
      res.status(400).json({
        code: 400,
        status: `Product does not exist`,
      });
    } else if (!router) {
      res.status(400).json({
        code: 400,
        status: `router does not exist`,
      });
    } else if (idProduct && router) {
      //update thông tin product
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body.infoProduct,
        { new: true } //để trả về thông tin sản phẩm đã được câp nhật mới
      );

      //update file
      await ProductFile.findOneAndUpdate(
        { router: req.body.lastRouter },
        {
          file: req.body.file,
          router: req.body.infoProduct.router,
        }
      );

      res.status(200).json({
        code: 200,
        status: "update success",
        data: updatedProduct, // ở frontend sẽ sử dụng spread để ghi đè vd:{...allProduct, updateProduct}
      });
    }
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: `Failed to update product with id ${req.params.productId}`,
    });
  }
}

//Cập nhật thông tin NHIỀU sản phẩm (không được phép update router và file vì 2 trường này không được trùng)
async function updateManyProduct(req, res) {
  try {
    const listId = await req.body.productIds.length;
    const router = await req.body.dataUpdate.router;
    const file = await req.body.dataUpdate.file;
    if (listId <= 0) {
      res.status(400).json({
        code: 400,
        status: `update failed products`,
      });
    } else if (router) {
      res.status(400).json({
        code: 400,
        status: `not allowed to change router`,
      });
    } else if (file) {
      res.status(400).json({
        code: 400,
        status: `not allowed to change file`,
      });
    } else if (listId > 0 && !router && !file) {
      await Product.updateMany(
        { _id: { $in: req.body.productIds } },
        req.body.dataUpdate
      );
      res.status(200).json({
        code: 200,
        status: "update success",
        data: req.body.productIds, //trả về những id đã cập nhật
      });
    }
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: `update failed products`,
    });
  }
}

//Xóa MỘT sản phẩm
async function deleteProduct(req, res) {
  try {
    const currentProduct = await Product.findById(req.params.id)
    if(!currentProduct) {
      res.status(404).json({
        code: 404,
        status: `No products found`,
      });
    } else {
      await Product.findByIdAndDelete(req.params.id); //Xóa sản phẩm
      await ProductFile.findOneAndDelete({router: currentProduct.router}); //Xóa file của sản phẩm
      await ProductComment.deleteMany({ productId: req.params.id }); //Xóa tất cả comment của sản phẩm bị xóa
      res.status(200).json({
        code: 200,
        status: "delete success",
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: `Serrver error ${err}`,
    });
  }
}

//Xóa Nhiều sản phẩm
async function deleteManyProduct(req, res) {
  try {
    const listProductId = req.body.productIds;
    const listRouter = req.body.listRouter;
    if (listProductId.length > 0 && listRouter.length > 0) {
      //Xóa tất cả sản phẩm
      await Product.deleteMany({
        _id: { $in: listProductId },
      });

      //Xóa tất cả file của từng sản phẩm
      await ProductFile.deleteMany({ router: { $in: listRouter } });

      //Xóa tất cả comment của từng sản phẩm bị xóa
      await ProductComment.deleteMany({ productId: { $in: listProductId } });
      res.status(200).json({
        code: 200,
        status: "delete success",
        data: req.body.productIds,
      });
    } else {
      res.status(404).json({
        code: 404,
        status: `delete failed products`,
      });
    }
  } catch (err) {
    res.status(404).json({
      code: 404,
      status: `delete failed products`,
    });
  }
}

//### COMMENT: Tạo bình luận mới
async function createComment(req, res) {
  try {
    const product = await Product.findOne({ _id: req.body.productId });
    if (product) {
      const newComment = new ProductComment({
        productId: req.body.productId,
        userId: req.body.userId,
        userName: req.body.userName,
        userAvatar: req.body.userAvatar,
        rating: req.body.rating,
        numRating: 1,
        comment: req.body.comment,
        numComment: 1,
        edit: false,
      });

      await newComment.save();
      res.status(201).json({
        code: 201,
        status: "new comment",
        data: newComment,
      });
    } else {
      res.status(404).json({
        code: 404,
        status: "product not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: `error when the comment ${err}`,
    });
  }
}

// Lấy danh sách tất cả bình luận theo sản phẩm
async function getCommentbyIdProduct(req, res) {
  try {
    const comments = await ProductComment.find({
      productId: req.params.productId,
    });

    const listComment = await comments.sort((a, b) => {
      if (req.query.sort === "asc") {
        return b.time - a.time;
      } else if (req.query.sort === "desc") {
        return b.time - a.time;
      }
    });

    //lấy theo số lượng
    let paginatedlistComments; //danh sách cần lấy
    let page = req.query.page;
    let limitPage = req.query.limitPage;
    const startIndex = (page - 1) * limitPage;
    const endIndex = page * limitPage;
    const totalPages = Math.ceil(listComment.length / limitPage); //làm tròn lên số page

    if (page > totalPages) {
      res.status(404).json({
        code: 404,
        status: "Failed to find comment",
        data: [],
      });
    } else {
      paginatedlistComments = listComment.slice(startIndex, endIndex);

      res.status(200).json({
        code: 200,
        status: "success",
        totalComments: listComment.length,
        currentPage: page,
        totalPages: totalPages,
        listCommentPerPage: limitPage,
        data: paginatedlistComments,
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: "Failed to get all Comment",
    });
  }
}

// Lấy danh sách tất cả bình luận theo người dùng
async function getCommentbyIdUser(req, res) {
  try {
    const comments = await ProductComment.find({
      userId: req.params.userId,
    });

    const listComment = await comments.sort((a, b) => {
      if (req.query.sort === "asc") {
        return b.time - a.time;
      } else if (req.query.sort === "desc") {
        return b.time - a.time;
      }
    });

    //lấy theo số lượng
    let paginatedlistComments; //danh sách cần lấy
    let page = req.query.page;
    let limitPage = req.query.limitPage;
    const startIndex = (page - 1) * limitPage;
    const endIndex = page * limitPage;
    const totalPages = Math.ceil(listComment.length / limitPage); //làm tròn lên số page

    if (page > totalPages) {
      res.status(404).json({
        code: 404,
        status: "Failed to find comment",
        data: [],
      });
    } else {
      paginatedlistComments = listComment.slice(startIndex, endIndex);

      res.status(200).json({
        code: 200,
        status: "success",
        totalComments: listComment.length,
        currentPage: page,
        totalPages: totalPages,
        listCommentPerPage: limitPage,
        data: paginatedlistComments,
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: "Failed to get all Comment",
    });
  }
}

// Chỉnh sửa comment
async function updateComment(req, res) {
  try {
    const updatedComment = await ProductComment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } //để trả về comment đã được câp nhật mới
    );
    res.status(200).json({
      code: 200,
      status: "update comment success",
      data: updatedComment,
    });
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: `Failed to update comment with id ${req.params.productId}`,
    });
  }
}

// xóa 1 comment
async function deleteComment(req, res) {
  try {
    await ProductComment.findByIdAndDelete(req.params.id);
    res.status(200).json({
      code: 204,
      status: "delete comment success",
    });
  } catch (err) {
    res.status(404).json({
      code: 404,
      status: `delete comment failed products`,
    });
  }
}

// xóa tất cả comment
async function deleteManyCommentbyProduct(req, res) {
  try {
    await ProductComment.deleteMany({ productId: req.params.productId });
    res.status(200).json({
      code: 200,
      status: "delete many comment success",
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: `delete failed products`,
    });
  }
}

// xóa tất cả comment theo id sản phẩm
async function deleteManyCommentbyProduct(req, res) {
  // thiếu logic không tìm thấy sản phẩm thì thông báo sản phẩm không tồn tại(không quan trọng lắm)
  try {
    await ProductComment.deleteMany({ productId: req.params.productId });
    res.status(200).json({
      code: 200,
      status: "delete many comment success",
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: `delete failed products`,
    });
  }
}

// xóa tất cả comment theo id người dùng
async function deleteManyCommentbyUser(req, res) {
  // thiếu logic không tìm thấy user thì thông báo user không tồn tại(không quan trọng lắm)
  try {
    await ProductComment.deleteMany({ userId: req.params.userId });
    res.status(200).json({
      code: 200,
      status: "delete many comment success",
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: `delete failed products`,
    });
  }
}

//### PRODUCT: Hàm tạo mới một danh mục
async function createCategoryProduct(req, res) {
  try {
    const brandName = await Category.findOne({ name: req.body.name });
    if (!brandName) {
      const category = new Category({
        name: req.body.name,
        content: req.body.content,
      });
      const savedCategory = await category.save();
      res.status(200).json({
        status: "Create a successful new category",
        data: savedCategory,
      });
    } else {
      res.status(403).json({
        code: 403,
        status: "directory already existsy",
      });
    }
  } catch (err) {
    res.status(500).json(`Failed to create new category ${err}`);
  }
}

//Hàm lấy danh sách tất cả các danh mục
async function getAllCategoriesProduct(req, res) {
  try {
    const listCategories = await Category.find();

    const categories = await listCategories.sort((a, b) => {
      if (req.query.sort === "asc") {
        return b.createdAt - a.createdAt;
      } else if (req.query.sort === "desc") {
        return b.createdAt - a.createdAt;
      }
    });

    //lấy theo số lượng
    let paginatedcategoriess; //danh sách cần lấy
    let page = req.query.page;
    let limitPage = req.query.limitPage;
    const startIndex = (page - 1) * limitPage;
    const endIndex = page * limitPage;
    const totalPages = Math.ceil(categories.length / limitPage); //làm tròn lên số page

    if (page > totalPages) {
      res.status(404).json({
        code: 404,
        status: "Failed to find categories",
        data: [],
      });
    } else {
      paginatedcategoriess = categories.slice(startIndex, endIndex);

      res.status(200).json({
        code: 200,
        status: "Get all categories successfully",
        totalComments: categories.length,
        currentPage: page,
        totalPages: totalPages,
        categoriesPerPage: limitPage,
        data: paginatedcategoriess,
      });
    }
  } catch (err) {
    res.status(500).json(`Failed to get all categories`);
  }
}

//Hàm lấy thông tin chi tiết của một danh mục
async function getCategoryProductById(req, res) {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.status(200).json({
        status: "Get category successfully",
        data: category,
      });
    } else {
      res.status(404).json(`Category not found`);
    }
  } catch (err) {
    res.status(500).json(`Failed to get category`);
  }
}

//Hàm cập nhật thông tin một danh mục
async function updateCategoryProduct(req, res) {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        content: req.body.content,
      },
      { new: true }
    );
    if (updatedCategory) {
      res.status(200).json({
        status: "Update category successfully",
        data: updatedCategory,
      });
    } else {
      res.status(404).json(`Category not found`);
    }
  } catch (err) {
    res.status(500).json(`Failed to update category`);
  }
}

//Hàm xóa một danh mục
async function deleteCategoryProduct(req, res) {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (deletedCategory) {
      res.status(200).json({
        status: "Delete category successfully",
        data: deletedCategory,
      });
    } else {
      res.status(404).json(`Category not found`);
    }
  } catch (err) {
    res.status(500).json(`Failed to delete category`);
  }
}

//Xóa Nhiều danh mục
async function deleteManyCategoryProduct(req, res) {
  try {
    const listCategoryId = req.body.categoryIds;
    if (listCategoryId.length > 0) {
      await Category.deleteMany({
        _id: { $in: listCategoryId },
      });
      res.status(200).json({
        code: 200,
        status: "delete success",
        data: req.body.categoryIds,
      });
    } else {
      res.status(404).json({
        code: 404,
        status: `delete failed Categorys`,
      });
    }
  } catch (err) {
    res.status(404).json({
      code: 404,
      status: `delete failed Categorys`,
    });
  }
}

module.exports = {
  createProduct,
  getPage,
  getAllProducts,
  getProductsLimitCategory,
  sortProductsByCategory,
  getProductById,
  updateProduct,
  updateManyProduct,
  deleteProduct,
  deleteManyProduct,

  createComment,
  getCommentbyIdProduct,
  getCommentbyIdUser,
  updateComment,
  deleteComment,
  deleteManyCommentbyProduct,
  deleteManyCommentbyUser,

  createCategoryProduct,
  getAllCategoriesProduct,
  getCategoryProductById,
  updateCategoryProduct,
  deleteCategoryProduct,
  deleteManyCategoryProduct,
};
