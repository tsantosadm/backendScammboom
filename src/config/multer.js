const multer = require('multer');
const crypto_hash = require('crypto');
const { extname, resolve } = require('path');

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (re, file, cb) => {
      crypto_hash.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
