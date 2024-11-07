import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../../utils/ServerConfig';
import GlobalStore from '../../../../../utils/GlobalStore';
import ChapterStore from '../../JourneyHome/Stores/ChapterStore';

export type LevelType = {
  _id: string;
  title: string;
  order: number;
};

export type SectionItemType = {
  _id: string;
  title: string;
  order: number;
  type: string;
  points: number;
  itemType: string;
};

export type SectionType = {
  _id: string;
  title: string;
  data: SectionItemType[];
  order: number;
};

class LevelStore {
  levels: LevelType[] = [];
  currentLevel: LevelType | null = null;
  sections: SectionType[] = [];
  currentSectionItem: any = null;
  isVisible: boolean = false;

  levelIndex: number = 1;

  constructor() {
    makeAutoObservable(this, {
      levels: observable,
      setLevels: action,
      getLevels: action,
      currentLevel: observable,
      setCurrentLevel: action,
      sections: observable,
      setSections: action,
      getSections: action,
      currentSectionItem: observable,
      setCurrentSectionItem: action,
      isVisible: observable,
      setIsVisible: action,
      levelIndex: observable,
      setLevelIndex: action,
    });
  }

  setLevelIndex(value: number) {
    this.levelIndex = value;
  }
  setLevels(value: LevelType[]) {
    this.levels = value;
    this.setCurrentLevel(value[0]);
  }

  setCurrentLevel(value: LevelType) {
    this.currentLevel = value;
  }

  setSections(value: SectionType[]) {
    this.sections = value;
  }

  setCurrentSectionItem(value: any) {
    this.currentSectionItem = value;
  }

  setIsVisible(value: boolean) {
    this.isVisible = value;
  }

  async getLevels() {
    try {
      const res = await server.get(
        `/student/chapter/level/${ChapterStore.currentChapter?._id}`,
        {
          headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
        },
      );
      console.log('Current chapter => ', ChapterStore.currentChapter);
      if (res.status == 200) {
        this.setLevels(res.data.result.levels);
      }
    } catch (error) {
      console.error('Error getting levels', error);
    }
  }
  async getSections() {
    try {
      const res = await server.get(
        `/student/chapter/level/section/${this.currentLevel?._id}`,
        // `/student/chapter/level/section/6720462abeb77af70be1489a`,
        {
          headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
        },
      );
      console.log('Current level => ', this.currentLevel);
      if (res.status == 200) {
        // const data = res.data;
        // console.log(data?.result?.sections);
        // const _sections = JSON.stringify(data?.result?.sections);
        // console.log(_sections);
        let _sections: SectionType[] = [];
        res.data.result.sections.forEach((item: any, index: number) => {
          _sections.push({
            _id: item._id,
            title: item.title,
            data: item.items,
            order: item.order,
          });
        });
        this.setSections(_sections);
        this.setSections(_sections);
      }
    } catch (error) {
      console.error('Error getting sections', error);
    }
  }

  async getSectionItem(sectionItemId: string) {
    try {
      this.setCurrentSectionItem(null);
      const res = await server.get(
        `/student/chapter/level/section/item/${sectionItemId}`,
        {headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken}},
      );
      if (res.status == 200) {
        console.log(res.data.result);
        this.setCurrentSectionItem(res.data.result);
        this.setIsVisible(true);
      }
    } catch (error) {
      console.error('error getting section item', error);
    }
  }
}

export default new LevelStore();
