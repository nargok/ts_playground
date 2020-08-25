import axios from 'axios';

export {}

let url: string =
 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

interface Article {
  id: number;
  title: string;
  description: string;
}

axios.get(url).then(function(response) {
  // let data: object[] = response.data; // 非推奨
  let data: Article[] = response.data;

  // error!
  // data = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     // description: 'description',
  //   },
  // ];

  console.log(data);
});
