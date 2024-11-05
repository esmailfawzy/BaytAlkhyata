import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../../utils/ServerConfig';
import GlobalStore from '../../../../../utils/GlobalStore';

interface AnswerType {
  _id: string;
  text: string;
}

interface QuestionType {
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
      getQuizArray: action,
      isLoading: observable,
      setIsLoading: action,
      difficulty: observable,
    });
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  setQuizArray(value: Array<QuestionType>) {
    this.quizArray = value;
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
            Accept: 'application/json',
          },
        },
      );

      if (res.status == 200) {
        this.setQuizArray(res.data.result);
        // console.log('res.data', res.data);
      }
    } catch (error) {
      console.error('error getting quiz array', error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default new QuizViewStore();
