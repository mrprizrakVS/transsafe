import { ImagesCollections } from '../api/images.js';

const Uploader = (e, template, collectionName = 'UserImages', inputMetaData = {}) => {
  let meta = Object.assign({
    date: new Date()
  }, inputMetaData);

  if (e.currentTarget.files && e.currentTarget.files[0]) {
    let upload = ImagesCollections[collectionName].insert({
      file: e.currentTarget.files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic',
      meta
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