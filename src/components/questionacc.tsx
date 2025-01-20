import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"


const questionAccuracyData = [
  { question: "Q1", cd0810cc1: 80, cd0810cc2: 90, cd0810cc3: 30 },
  { question: "Q2", cd0810cc1: 95, cd0810cc2: 85, cd0810cc3: 85 },
  { question: "Q3", cd0810cc1: 70, cd0810cc2: 75, cd0810cc3: 65 },
  { question: "Q4", cd0810cc1: 85, cd0810cc2: 90, cd0810cc3: 75 },
  { question: "Q5", cd0810cc1: 90, cd0810cc2: 80, cd0810cc3: 85 }
]


function QuestionAccuracy() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={questionAccuracyData}>
        <XAxis
          dataKey="question"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Line
          type="monotone"
          dataKey="cd0810cc1"
          stroke="#8884d8"
          strokeWidth={2}
          name="Test Run 1"
        />
        <Line
          type="monotone"
          dataKey="cd0810cc2"
          stroke="#82ca9d"
          strokeWidth={2}
          name="Test Run 2"
        />
        <Line
          type="monotone"
          dataKey="cd0810cc3"
          stroke="#ffc658"
          strokeWidth={2}
          name="Test Run 3"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default QuestionAccuracy