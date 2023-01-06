import { LightningElement ,track} from 'lwc';

export default class FileUploadDemo extends LightningElement {
    @track fileContents;

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.fileContents = reader.result;
        };
        reader.readAsText(file);
      }
    }
}