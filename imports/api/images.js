import { FilesCollection } from 'meteor/ostrio:files';

const UserImages = new FilesCollection({
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

export { UserImages }