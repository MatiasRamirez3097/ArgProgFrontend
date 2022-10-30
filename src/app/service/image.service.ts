import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    url: string = "";
    constructor(private storage: Storage) { }

    public uploadImage($event: any, name: string) {
        const file = $event.target.files[0]
        const imgRef = ref(this.storage, 'imagenes/' + name)
        uploadBytes(imgRef, file).then(res => {
            this.getImage()
        }).catch(err => {
            console.log(err);
        })
    }

    getImage() {
        const imagesRef = ref(this.storage, 'imagenes')
        list(imagesRef).then(async res => {
            for (let item of res.items) this.url = await getDownloadURL(item)
            console.log(this.url)
        }).catch(err => {
            console.log(err);
        })
    }
}
