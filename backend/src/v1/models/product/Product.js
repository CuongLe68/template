const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 150,
    },
    image: {
      type: Array,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 1 && v.length <= 8; // giới hạn số lượng phần tử trong mảng từ 1 đến 8
        },
      },
    },
    category: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 1000000000,
    },
    numView: {
      type: Number,
      required: true,
      min: 0,
      max: 10000000000,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 1000000000,
    },
    percent: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    router: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      minlength: 0,
      maxlength: 150,
    },
    hashtags: {
      type: Array,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 0 && v.length <= 15;
        },
      },
    },
    countInSold: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 50000,
    },
    countPromotional: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 50000,
    },
    hidden: {
      status: {
        type: Boolean,
        default: false,
        required: true,
      },
      time: {
        timeStart: Date,
        timeEnd: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

/*
  ### DOCS

  Trong đoạn mã trên, chúng ta đã định nghĩa một schema Mongoose cho đối tượng Product, bao gồm các trường sau:

  - name: Tên sản phẩm (String). (1-150 ký tự)
  - image: mảng chứa các hình ảnh sản phẩm (1-8 phần tử)
  - category: Danh mục sản phẩm (String). (1-50 ký tự)
  - price: Giá sản phẩm (Number). (0 - 1.000.000.000đ)
  - numView: số lượt xem sản phẩm khi người dùng click chọn sản phẩm thì tăng lên 1 (0 - 10.000.000.000)
  - discount: số tiền còn lại sau khi giảm (0 - 1.000.000.000đ)
  - percent : phần trăm giảm (0 - 100)
  - router : pathName (zbc.com/router-day) (1 - 60)
  - description: Mô tả sản phẩm (String).
  - hashtags: hashtags (vd: #coffe,#banh) (1 - 15 phần tử)
  - countInSold: Số lượng sản phẩm đã bán (Number). (0 - 50.000)
  - countPromotional: Số lượng sản phẩm khuyến mãi (Number). (0 - 50.000)
  - hidden: Ẩn sản phẩm đi (cho chức năng chuyển vào thùng rác,..)
  - status: trạng thái ẩn hoặc hiện sản phẩm
  - time: thời gian bắt đầu và kết thúc ẩn

  Để thuận tiện cho việc quản lý, chúng ta cũng sử dụng thuộc tính timestamps của Mongoose để tự động thêm các trường createdAt và updatedAt cho 
  mỗi bản ghi trong cơ sở dữ liệu.

  Cuối cùng, chúng ta đã tạo một model Product bằng cách sử dụng schema đã định nghĩa và export model để có thể sử dụng trong các tệp khác của 
  ứng dụng.
*/
