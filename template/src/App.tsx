import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
 
function App() {
  const [personalEmail, setPersonalEmail] = useState("")
  const [personalPassword, setPersonalPassword] = useState("")
  const [businessEmail, setBusinessEmail] = useState("")
  const [businessPassword, setBusinessPassword] = useState("")

  const handlePersonalLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Personal login attempt with:", personalEmail)
    // Add authentication logic here
  }

  const handleBusinessLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Business login attempt with:", businessEmail)
    // Add authentication logic here
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Account Login</CardTitle>
          <CardDescription className="text-center">
            Choose your account type to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <form onSubmit={handlePersonalLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="personal-email">Email</Label>
                  <Input 
                    id="personal-email" 
                    type="email" 
                    placeholder="name@example.com"
                    value={personalEmail}
                    onChange={(e) => setPersonalEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="personal-password">Password</Label>
                    <a href="#" className="text-xs text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="personal-password" 
                    type="password"
                    value={personalPassword}
                    onChange={(e) => setPersonalPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Sign in to Personal Account</Button>
              </form>
            </TabsContent>
            
            <TabsContent value="business">
              <form onSubmit={handleBusinessLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-email">Business Email</Label>
                  <Input 
                    id="business-email" 
                    type="email" 
                    placeholder="name@company.com"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="business-password">Password</Label>
                    <a href="#" className="text-xs text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="business-password" 
                    type="password"
                    value={businessPassword}
                    onChange={(e) => setBusinessPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Sign in to Business Account</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-2">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Create an account
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
 
export default App