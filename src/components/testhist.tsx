import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function TestHistory() {
    return (
      <div className="space-y-4">
        <Card className="dark:bg-black dark:text-slate-100">
          <CardHeader>
            <CardTitle>Previous Test Runs</CardTitle>
            <CardDescription>Recent test execution history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "2024-12-07",
                  time: "09:17:37",
                  uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f9"
                },
                {
                  date: "2024-12-06",
                  time: "21:27:17",
                  uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f7"
                },
                {
                  date: "2024-12-01",
                  time: "00:00:00",
                  uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f6"
                }
              ].map((run, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Test Run {index + 1}</p>
                    <p className="text-xs text-muted-foreground">
                      {run.date} at {run.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

export default TestHistory