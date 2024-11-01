import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../utils/ServerConfig';
import GlobalStore from '../../../../utils/GlobalStore';
import RNFS from 'react-native-fs';
import {Alert, Platform} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../../../../constants/AppConfig';

export interface BookType {
  _id: string;
  title: string;
  image: string;
  size: string;
  createdAt: string;
}

class LibraryStore {
  books: Array<BookType> = [];
  isDownloading: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      books: observable,
      setBooks: action,
      getAllBooks: action,
      isDownloading: observable,
      setIsDownloading: action,
      getPDF: action,
    });
  }

  setBooks(value: Array<BookType>) {
    this.books = value;
  }

  setIsDownloading(value: boolean) {
    this.isDownloading = value;
  }
  async getAllBooks() {
    try {
      const res = await server.get('/student/library', {
        headers: {
          Authorization: 'Bearer ' + GlobalStore.jwtToken,
        },
      });

      console.log('res', res.data);
      if (res.status == 200) {
        this.setBooks(res.data.result);
      }
    } catch (error) {
      console.error('error getting books', error);
    }
  }

  async getPDF(item: BookType) {
    try {
      const res = await server.get('/student/library/' + item._id, {
        headers: {
          Authorization: 'Bearer ' + GlobalStore.jwtToken,
        },
      });

      console.log('res', res.data);
      if (res.status == 200) {
        // this.setBooks(res.data.result);
        return res.data.pdfUrl;
      }
    } catch (error) {
      console.error('error getting books', error);
    }
  }

  async downloadBook(item: BookType) {
    try {
      this.setIsDownloading(true);

      const fileUrl: string = `${BASE_URL}/student/library/download/${item._id}`;
      // const fileUrl: string = `${BASE_URL}/student/library/download/66b2d0c4fbd6d596a4c0632a`;
      const downloadDest: string =
        Platform.select({
          ios: `${RNFS.DocumentDirectoryPath}/${item.title}.pdf`,
          android: `${RNFS.DownloadDirectoryPath}/${item.title}.pdf`,
        }) || '';

      // Use axios with onDownloadProgress
      // const response = await axios({
      //   method: 'get',
      //   url: fileUrl,
      //   headers: {
      //     Authorization: 'Bearer ' + GlobalStore.jwtToken,
      //   },
      //   responseType: 'arraybuffer',
      //   onDownloadProgress: progressEvent => {
      //     const totalSize = progressEvent.total || 1;
      //     const downloaded = progressEvent.loaded;
      //     const progress = Math.round((downloaded / totalSize) * 100);

      //     console.log(`Download Progress: ${progress}%`);
      //     // You could update a state variable here to show progress
      //   },
      // });

      const downloadObj = RNFS.downloadFile({
        headers: {
          Authorization: 'Bearer ' + GlobalStore.jwtToken,
        },
        fromUrl: fileUrl,
        toFile: downloadDest,
      });

      // Write the file
      // await RNFS.writeFile(downloadDest, response.data, 'base64');

      const result = await downloadObj.promise;

      if (result.statusCode === 200) {
        console.log('File downloaded successfully:', downloadDest);
        Alert.alert('File downloaded successfully!');
      } else {
        console.log('Failed to download file');
        Alert.alert('Failed to download file');
      }

      // Alert.alert(
      //   'Download Complete',
      //   'File downloaded successfully at ' + downloadDest,
      // );
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Download Failed', 'Error downloading file');
    } finally {
      this.setIsDownloading(false);
    }
  }
}

export default new LibraryStore();
