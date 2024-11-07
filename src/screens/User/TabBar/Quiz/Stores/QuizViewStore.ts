import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../../utils/ServerConfig';
import GlobalStore from '../../../../../utils/GlobalStore';

interface AnswerType {
  _id: string;
  text: string;
}

export interface QuestionType {
  _id: string;
  question: string;
  answers: Array<AnswerType>;
  points: number;
}

class QuizViewStore {
  quizArray: Array<QuestionType> = [];
  isLoading: boolean = false;
  difficulty: string = 'easy';

  constructor() {
    makeAutoObservable(this, {
      quizArray: observable,
      setQuizArray: action,
      resetQuizArray: action,
      getQuizArray: action,
      isLoading: observable,
      setIsLoading: action,
      difficulty: observable,
      setDifficulty: action,
    });
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  setQuizArray(value: QuestionType[]) {
    this.quizArray = value;
  }
  resetQuizArray() {
    this.quizArray = [];
  }
  setDifficulty(value: string) {
    this.difficulty = value;
  }

  async getQuizArray() {
    try {
      this.setIsLoading(true);
      const res = await server.get(
        '/student/bank-questions?difficulty=' + this.difficulty,
        {
          headers: {
            Authorization: 'Bearer ' + GlobalStore.jwtToken,
          },
        },
      );

      if (res.status == 200 || res.status == 304) {
        this.setQuizArray(res.data.result);
        // console.log('res.data from store', res.data);
        return res.data?.result;
      }
    } catch (error) {
      console.error('error getting quiz array', error);
      return [];
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default new QuizViewStore();
