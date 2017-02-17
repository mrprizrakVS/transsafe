import { FilesCollection } from 'meteor/ostrio:files';

const ImagesCollections = {};

ImagesCollections.UserImages = new FilesCollection({
  collectionName: 'UserImages',
  allowClientCode: false,
  storagePath: `/home/vidia/assets/UserImages`,
  onBeforeUpload(file) {
    if(file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Будь ласка, завантажте зображення з розміром до 10МБ';
    }
  }
});

ImagesCollections.ServicesAdditionPhoto = new FilesCollection({
  collectionName: 'ServicesAdditionPhoto',
  allowClientCode: false,
  storagePath: `/home/vidia/assets/ServicesAdditionPhoto`,
  onBeforeUpload(file) {
    if(file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Будь ласка, завантажте зображення з розміром до 10МБ';
    }
  }
});

ImagesCollections.ServicesBannerPhoto = new FilesCollection({
  collectionName: 'ServicesBannerPhoto',
  allowClientCode: false,
  storagePath: `/home/vidia/assets/ServicesBannerPhoto`,
  onBeforeUpload(file) {
    if(file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Будь ласка, завантажте зображення з розміром до 10МБ';
    }
  }
});


export { ImagesCollections }