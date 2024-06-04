import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "../components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/table"
import { Badge } from "../components/ui/badge"
import { Label } from "../components/ui/label"
import { ListFilterIcon, FileIcon } from "lucide-react"

export default function Trips() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 mt-4 mb-4">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>Ongoing Rides</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Rides Dashboard for Seamless Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Ride</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
              </CardContent>
              <CardFooter>
                <Progress value={25} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">$5,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+10% from last month</div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs defaultValue="week">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                      <ListFilterIcon className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                  <FileIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="week">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Rides</CardTitle>
                  <CardDescription>Recent rides from your service.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rider</TableHead>
                        <TableHead className="hidden sm:table-cell">Type</TableHead>
                        <TableHead className="hidden sm:table-cell">Status</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-accent">
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Noah Williams</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">noah@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Fulfilled</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
                        <TableCell className="text-right">$350.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
                        <TableCell className="text-right">$450.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Ride Availed</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
                        <TableCell className="text-right">$450.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Ride Details</CardTitle>
              <CardDescription>Detailed information about the selected ride.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label>Rider Name</Label>
                <div>Liam Johnson</div>
              </div>
              <div className="grid gap-2">
                <Label>Ride Type</Label>
                <div>Ride Availed</div>
              </div>
              <div className="grid gap-2">
                <Label>Ride Status</Label>
                <div>
                  <Badge className="text-xs" variant="secondary">
                    Fulfilled
                  </Badge>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Pickup Location</Label>
                <div>123 Main St, Anytown USA</div>
              </div>
              <div className="grid gap-2">
                <Label>Dropoff Location</Label>
                <div>456 Oak Rd, Anytown USA</div>
              </div>
              <div className="grid gap-2">
                <Label>Ride Date</Label>
                <div>2023-06-23</div>
              </div>
              <div className="grid gap-2">
                <Label>Ride Amount</Label>
                <div>$250.00</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Details about the customer who took the ride.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label>Name</Label>
                <div>Liam Johnson</div>
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <div>liam@example.com</div>
              </div>
              <div className="grid gap-2">
                <Label>Phone</Label>
                <div>+1 (555) 555-5555</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Details about the payment for this ride.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label>Payment Method</Label>
                <div>Visa ending in 1234</div>
              </div>
              <div className="grid gap-2">
                <Label>Subtotal</Label>
                <div>$250.00</div>
              </div>
              <div className="grid gap-2">
                <Label>Fees</Label>
                <div>$25.00</div>
              </div>
              <div className="grid gap-2">
                <Label>Total</Label>
                <div>$275.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}