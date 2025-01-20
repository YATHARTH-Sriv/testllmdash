"use client"

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"
// import { ThemeToggle } from "@/components/themetoggle"
import TestStatistics from "@/components/teststats"
import QuestionAccuracy from "@/components/questionacc"
import TestHistory from "@/components/testhist"
import CustomMetrics from "@/components/custommetrics"
import { ThemeToggle } from "@/components/themetoggle";


export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex dark:bg-black dark:text-white">
        <div className="border-b dark:border-slate-700">
          <div className="flex h-16 items-center px-4">
            <p className="text-2xl px-4 font-bold tracking-tight flex gap-2 text-blue-400">BreakYourLLM <BsFillMenuButtonWideFill className=" text-orange-300"/> </p>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <BsFillMenuButtonWideFill className="h-6 w-6  text-orange-300" />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="metrics">Custom Metrics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <TestStatistics />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 dark:bg-black dark:text-slate-100">
                  <CardHeader>
                    <CardTitle>Question-wise Accuracy</CardTitle>
                    <CardDescription>
                      Performance across different test questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <QuestionAccuracy />
                  </CardContent>
                </Card>
                <Card className="col-span-3 dark:bg-black dark:text-slate-100">
                  <CardHeader>
                    <CardTitle>Test History</CardTitle>
                    <CardDescription>
                      Recent test executions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TestHistory />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="accuracy">
              <Card className="dark:bg-black dark:text-slate-100">
                <CardHeader>
                  <CardTitle>Detailed Accuracy Analysis</CardTitle>
                  <CardDescription>
                    Question-wise accuracy breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <QuestionAccuracy />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <TestHistory />
            </TabsContent>
            <TabsContent value="metrics">
              <CustomMetrics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
