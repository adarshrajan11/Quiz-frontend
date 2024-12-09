import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    answer: "Africa",
  },
];

const Newquiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    // Check if the selected answer is correct
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or end the quiz
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    } else {
      setIsQuizCompleted(true);
      setEndTime(Date.now());
    }
  };

  const timeTaken = endTime ? ((endTime - startTime) / 1000).toFixed(2) : null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 2,
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 600 }}>
        <CardContent>
          {!isQuizCompleted ? (
            <Box>
              <Typography variant="h5" gutterBottom>
                Question {currentQuestion + 1}/{quizData.length}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {quizData[currentQuestion].question}
              </Typography>

              <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
                {quizData[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                >
                  {currentQuestion < quizData.length - 1 ? "Next" : "Submit"}
                </Button>
                {isLoading && <CircularProgress size={24} />}
              </Box>
            </Box>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" gutterBottom>
                Quiz Completed!
              </Typography>
              <Typography variant="h6">
                Your Score: {score}/{quizData.length}
              </Typography>
              <Typography variant="h6">
                Time Taken: {timeTaken} seconds
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswer("");
                  setScore(0);
                  setEndTime(null);
                  setIsQuizCompleted(false);
                  setIsLoading(false);
                }}
                sx={{ mt: 2 }}
              >
                Restart Quiz
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Newquiz;
