// 1.Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems

const Pagination = {
  tempArray: [],
  pageGroup: -1,
  init(array, pageSize) {
    let index = 0;
    for (index = 0; index < array.length; index += pageSize) {
      let myChunk = array.slice(index, index + pageSize);

      this["tempArray"].push(myChunk);
    }
    this["pageGroup"]++;
  },
  prevPage() {
    this["pageGroup"]--;
    return this;
  },
  nextPage() {
    this.pageGroup++;
    return this;
  },
  firstPage() {
    return this.tempArray[0];
  },
  lastPage() {
    return this.tempArray[this.tempArray.length - 1];
  },
  goToPage(page) {
    return this.tempArray[page];
  },
  getPageItems() {
    return this["tempArray"][this["pageGroup"]];
  },
};
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// Pagination.init(alphabetArray, 4);
// Pagination.getPageItems();
// Pagination.nextPage();
// Pagination.prevPage();
// console.log(Pagination.getPageItems());
// Pagination.nextPage();
// console.log(Pagination.getPageItems());
// console.log(Pagination.goToPage(2));
// console.log(Pagination.firstPage());
