import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CustomMetrics() {
  return (
    <div className="space-y-4">
      <Card className="dark:bg-black dark:text-slate-100">
        <CardHeader>
          <CardTitle>Custom Metrics</CardTitle>
          <CardDescription>Additional performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Custom Metric 1</p>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-slate-700">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: "91%" }}
                ></div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">91.0%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Custom Metric 2</p>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-slate-700">
                <div
                  className="h-2 rounded-full bg-green-600"
                  style={{ width: "97%" }}
                ></div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">97.0%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CustomMetrics