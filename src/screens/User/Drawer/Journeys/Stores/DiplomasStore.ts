import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../../utils/ServerConfig';
import GlobalStore from '../../../../../utils/GlobalStore';
import {Alert} from 'react-native';
import ChapterStore from '../../../TabBar/JourneyHome/Stores/ChapterStore';

export type AllDiplomas = {
  _id: string;
  title: string;
  price: number;
  description: string;
  totalHours: number;
  expiresIn: string;
};

export type StudentDiploma = {
  _id: string;
  title: string;
  description: string;
  percentageCompleted: string;
};

class DiplomasStore {
  allDiplomas: AllDiplomas[] = [];
  studentDiplomas: StudentDiploma[] = [];
  currentDiploma: (AllDiplomas & StudentDiploma) | null = null;

  constructor() {
    makeAutoObservable(this, {
      allDiplomas: observable,
      setAllDiplomas: action,
      getAllDiplomas: action,
      studentDiplomas: observable,
      setStudentDiplomas: action,
      getStudentDiplomas: action,
      currentDiploma: observable,
      setCurrentDiploma: action,
    });
  }

  setAllDiplomas(value: AllDiplomas[]) {
    this.allDiplomas = value;
  }

  setStudentDiplomas(value: StudentDiploma[]) {
    this.studentDiplomas = value;
  }

  setCurrentDiploma(value: AllDiplomas & StudentDiploma) {
    this.currentDiploma = value;
    ChapterStore.getChapters(value._id);
  }

  async getAllDiplomas() {
    try {
      const res = await server.get('/student/diploma/all', {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      if (res.status == 200) {
        this.setAllDiplomas(res.data.result);
      }
    } catch (error) {
      console.error('error getting all diplomas', error);
    }
  }
  async getStudentDiplomas() {
    try {
      const res = await server.get('/student/diploma', {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      if (res.status == 200) {
        this.setStudentDiplomas([
          {
            _id: '671f0b1396ecb1dace76a0a1',
            title: 'Owned diploma',
            description: 'bla bla bla bla bla bla bla ',
            percentageCompleted: '60',
          },
          ...res.data.result,
        ]);
      }
    } catch (error) {
      console.error('error getting all diplomas', error);
    }
  }

  async toggleBookMark(id: string) {
    try {
      const res = await server.patch(`/student/diploma/bookmark/${id}`, null, {
        headers: {
          Authorization: 'Bearer ' + GlobalStore.jwtToken,
        },
      });

      console.log(res.data);
      console.log(res.status);
      if (res.status == 200) {
        Alert.alert(res.data.status, res.data.message);
      }
    } catch (error) {
      console.error('error toggleBookMark for id:', id, error);
    }
  }
}

export default new DiplomasStore();
