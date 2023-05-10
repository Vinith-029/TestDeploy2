import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == 'application/pdf' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpeg'
    ) {
      callback(null, true)
    } else {
      alert('Upload format not supported!')
      callback(null, false)
    }
  },
});

export default upload;