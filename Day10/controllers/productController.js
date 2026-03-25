const { Product } = require('../models');
const path = require('path');
const fs = require('fs');

module.exports = {
  // Create product (with image)
  create: async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const imageFile = req.file ? req.file.filename : null;
      const product = await Product.create({
        name,
        price: parseFloat(price || 0),
        description,
        image: imageFile
      });
      return res.status(201).json({ success: true, product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // List all
  list: async (req, res) => {
    try {
      const products = await Product.findAll({ order: [['id', 'DESC']] });
      return res.json({ success: true, products });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // Get one
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
      return res.json({ success: true, product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // Update (optionally replace image)
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, description } = req.body;
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

      // nếu có file mới, xóa file cũ
      if (req.file) {
        if (product.image) {
          const oldPath = path.join(process.cwd(), process.env.UPLOAD_DIR || 'uploads', product.image);
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        product.image = req.file.filename;
      }

      product.name = name ?? product.name;
      product.price = price !== undefined ? parseFloat(price) : product.price;
      product.description = description ?? product.description;

      await product.save();
      return res.json({ success: true, product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // Delete
  remove: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

      // xóa file
      if (product.image) {
        const filePath = path.join(process.cwd(), process.env.UPLOAD_DIR || 'uploads', product.image);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }

      await product.destroy();
      return res.json({ success: true, message: 'Deleted successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  }
};
