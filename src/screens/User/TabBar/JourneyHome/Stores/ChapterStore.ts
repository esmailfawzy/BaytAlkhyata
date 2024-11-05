import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../../utils/ServerConfig';
import GlobalStore from '../../../../../utils/GlobalStore';
import DiplomasStore from '../../../Drawer/Journeys/Stores/DiplomasStore';

export type ChapterType = {
  _id: string;
  title: string;
};

class ChapterStore {
  chapters: ChapterType[] = [];
  currentChapter: ChapterType | null = null;
  constructor() {
    makeAutoObservable(this, {
      chapters: observable,
      setChapters: action,
      getChapters: action,
      currentChapter: observable,
      setCurrentChapter: action,
    });
  }

  setChapters(value: ChapterType[]) {
    this.chapters = value;
  }

  setCurrentChapter(value: ChapterType) {
    this.currentChapter = value;
  }

  async getChapters(id?: string) {
    try {
      console.log(
        'DiplomasStore.currentDiploma?._id',
        DiplomasStore.currentDiploma?._id,
      );
      const res = await server.get(
        `/student/chapter/${id || DiplomasStore.currentDiploma?._id}`,
        {
          headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
        },
      );

      if (res.status == 200) {
        this.setChapters(res.data.result.chapters);
      }
    } catch (error) {
      console.error('error getting chapters', error);
    }
  }
}

export default new ChapterStore();
