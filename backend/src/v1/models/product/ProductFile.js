const mongoose = require("mongoose");

const productFileSchema = mongoose.Schema(
  {
    router: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    imagesFile: {
      type: Array,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 0 && v.length <= 50; // giới hạn số lượng phần tử trong mảng từ 0 đến 50
        },
      },
    },
    file: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProductFiles", productFileSchema);
