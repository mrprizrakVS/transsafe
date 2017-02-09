import { UserImages } from '../api/images.js';

const Uploader = (e, template) => {
  if (e.currentTarget.files && e.currentTarget.files[0]) {
    let upload = UserImages.insert({
      file: e.currentTarget.files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic',
      meta: {
        date: new Date()
      }
    }, false);

    upload.on('start', function() {
      template.currentUpload.set(this);
    });

    upload.on('end', function(error, fileObj) {
      if (error) {
        alert(`Помилка при завантаженні: ${error}`);
      } else {
        alert(`Зображення "${fileObj.name}" успішно завантажене`);
      }
      template.currentUpload.set(false);
    });

    upload.start();
  }
};


export { Uploader };