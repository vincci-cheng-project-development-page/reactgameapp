import { Component } from "react";
import QuizSolutions from './QuizSolutions.js'
import RenderAllQA from "./RenderAllQA.js";
import Navbar from './Navbar.js';
import styles from './mystyle.module.css'; 

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fetchedArrayGK: [], //[], //Initial Fetched Arrays
      fetchedArrayScience: [],
      fetchedArrayMath: [],
      generalQ: 0, //Input # of General Questions
      scienceQ: 0, //Input # of General Questions
      mathQ: 0, //Input # of General Questions
      generalQItems: [],
      mathQItems: [],
      scienceQItems: [],
      submittedData: [], //General Q#, Math Q#, Science Q#
      combinedSelection: [], //[SplicedGeneral, SplicedMath, SplicedScience], but these are in one array
      scrambledcombinedArray: [],
      arrayOfQuestions: 0,
      currentItemIndex: 0,
      correctAnswer: "---",
      itemsCorrect: 0,
      itemsIncorrect: 0,
      seeSolutions: 0,
      newlyLiked: []
    }
  };

  componentDidMount = async () => {
    //For the first API
    //Default URL
    const url1 =
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean";
    //Fetch Data
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    this.setState({ fetchedArrayGK: data1.results, loading: false });
    //For the second API
    const url2 = "https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=boolean";
    //Fetch Data
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    //Set State
    this.setState({ fetchedArrayScience: data2.results, loading: false });
    //For the third API
    const url3 =
      "https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=boolean";
    //Fetch Data
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    //Set State
    this.setState({ fetchedArrayMath: data3.results, loading: false });
  };

  handleGeneralChange = (event) => {
    this.setState({
      generalQ: event.target.value
    });
  };

  handleScienceChange = (event) => {
    this.setState({
      scienceQ: event.target.value
    });
  };

  handleMathChange = (event) => {
    this.setState({
      mathQ: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      generalQ: this.state.generalQ,
      scienceQ: this.state.scienceQ,
      mathQ: this.state.mathQ
    };
    let dataArray = this.state.submittedData.concat(formData);
    if ((parseInt(this.state.generalQ) + parseInt(this.state.scienceQ) + parseInt(this.state.mathQ))>5 || (parseInt(this.state.generalQ) + parseInt(this.state.scienceQ) + parseInt(this.state.mathQ))===0){
      alert("Invalid selection. Please resubmit before proceeding.")
    }
    this.setState({ submittedData: dataArray });}
  

  testingSplicingStates = () => {
    const curtailedGK = this.state.fetchedArrayGK.slice(0, this.state.generalQ);
    const curtailedScience = this.state.fetchedArrayScience.slice(
      0,
      this.state.scienceQ
    );
    const curtailedMath = this.state.fetchedArrayMath.slice(
      0,
      this.state.mathQ
    );
    const curtailQuestions = [];
    curtailQuestions.push(
      curtailedGK, //index 0
      curtailedScience, //index 1
      curtailedMath //index 2
    );
    const curtailedQuestionTogether = []; // No unecessary indices
    curtailedGK.forEach((element) => curtailedQuestionTogether.push(element));
    curtailedScience.forEach((element) =>
      curtailedQuestionTogether.push(element)
    );
    curtailedMath.forEach((element) => curtailedQuestionTogether.push(element));
    const scrambledCurtailedSelection = [];
    for (let i=0; i<curtailedQuestionTogether.length; i++){
      scrambledCurtailedSelection.push(curtailedQuestionTogether[i].question)}
/*     scrambledCurtailedSelection.push(
      curtailedQuestionTogether[2],
      curtailedQuestionTogether[0],
      curtailedQuestionTogether[3],
      curtailedQuestionTogether[1],
      curtailedQuestionTogether[4]
    );*/
    const questionsArray = []
    for (let i=0; i<scrambledCurtailedSelection.length; i++){
    questionsArray.push(scrambledCurtailedSelection[i].question)}
/*     questionsArray.push(scrambledCurtailedSelection[0].question,
      scrambledCurtailedSelection[1].question,
      scrambledCurtailedSelection[2].question,
      scrambledCurtailedSelection[3].question,
      scrambledCurtailedSelection[4].question,
      ) */

    this.setState((prevState) => ({
      ...prevState,
      generalQItems: [...this.state.generalQItems, ...curtailQuestions[0]],
      scienceQItems: [...this.state.scienceQItems, ...curtailQuestions[1]],
      mathQItems: [...this.state.mathQItems, ...curtailQuestions[2]],
      combinedSelection: [...scrambledCurtailedSelection],
      arrayOfQuestions: questionsArray
    }));
  };

  isItCorrect = (event, prevState) => {
    if (event.target.innerText === this.state.combinedSelection[this.state.currentItemIndex].correct_answer) {
        this.setState((prevState) => ({
          ...this.state,
          currentItemIndex: prevState.currentItemIndex + 1,
          itemsCorrect: prevState.itemsCorrect + 1
        }))
      }
      else {
        this.setState((prevState) => ({
          ...this.state,
          itemsIncorrect: prevState.itemsIncorrect + 1,
          currentItemIndex: prevState.currentItemIndex + 1
        }))
      }
  };

  render() {
    return (
      <div>
        <h1 className ={styles.bigblue}>Quick True/False Trivia (Total of 5 Questions Max.)</h1>
        <form onSubmit={(event) => this.handleSubmit(event)} className ={styles.formstyle}>
            <span>General Q:</span>
            <input
              type="text"
              onChange={(event) => this.handleGeneralChange(event)}
              value={this.state.generalQ}
            />
            <span>Science Q:</span>
            <input
              type="text"
              onChange={(event) => this.handleScienceChange(event)}
              value={this.state.scienceQ}
            />
            <span>Math Q:</span>
            <input
              type="text"
              onChange={(event) => this.handleMathChange(event)}
              value={this.state.mathQ}
            />
            <input type="submit" />
          </form>
  <br />
        <button onClick={this.testingSplicingStates}>
          Display Chosen Items
        </button>
        <RenderAllQA arrayOfQuestions = {this.state.arrayOfQuestions} currentItemIndex = {this.state.currentItemIndex} combinedSelection = {this.state.combinedSelection} isItCorrect = {this.isItCorrect} />

        <div>
          <div>Correct Answer Attempts: {this.state.itemsCorrect}</div>
          <div>Incorrect Answer Attempts: {this.state.itemsIncorrect}</div>
        </div>
        <QuizSolutions currentItemIndex = {this.state.currentItemIndex} combinedSelection ={this.state.combinedSelection}/>

      </div>
    );
  }
}