import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Code2, 
  Play, 
  Copy, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Database,
  Shield,
  Zap
} from 'lucide-react';

interface APIEndpoint {
  method: string;
  endpoint: string;
  description: string;
  requestBody?: string;
  response: string;
  headers: string[];
}

const TaskAPIPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [testEndpoint, setTestEndpoint] = useState('');
  const [testMethod, setTestMethod] = useState('GET');
  const [testResponse, setTestResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const endpoints: APIEndpoint[] = [
    {
      method: 'GET',
      endpoint: '/api/tasks',
      description: 'Retrieve all tasks for the authenticated user',
      response: `{
  "success": true,
  "data": [
    {
      "id": "task_123",
      "title": "Complete project proposal",
      "description": "Write and review the Q4 project proposal",
      "status": "in_progress",
      "priority": "high",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-16T09:15:00Z",
      "due_date": "2024-01-20T17:00:00Z",
      "assignee_id": "user_456"
    }
  ],
  "meta": {
    "total": 25,
    "page": 1,
    "per_page": 10
  }
}`,
      headers: ['Authorization: Bearer <token>', 'Content-Type: application/json']
    },
    {
      method: 'POST',
      endpoint: '/api/tasks',
      description: 'Create a new task',
      requestBody: `{
  "title": "New task title",
  "description": "Task description",
  "priority": "medium",
  "due_date": "2024-01-25T17:00:00Z",
  "assignee_id": "user_789"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "task_124",
    "title": "New task title",
    "description": "Task description",
    "status": "todo",
    "priority": "medium",
    "created_at": "2024-01-17T11:00:00Z",
    "updated_at": "2024-01-17T11:00:00Z",
    "due_date": "2024-01-25T17:00:00Z",
    "assignee_id": "user_789"
  }
}`,
      headers: ['Authorization: Bearer <token>', 'Content-Type: application/json']
    },
    {
      method: 'PUT',
      endpoint: '/api/tasks/:id',
      description: 'Update an existing task',
      requestBody: `{
  "title": "Updated task title",
  "status": "completed",
  "priority": "low"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "task_123",
    "title": "Updated task title",
    "description": "Write and review the Q4 project proposal",
    "status": "completed",
    "priority": "low",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-17T11:30:00Z",
    "due_date": "2024-01-20T17:00:00Z",
    "assignee_id": "user_456"
  }
}`,
      headers: ['Authorization: Bearer <token>', 'Content-Type: application/json']
    },
    {
      method: 'DELETE',
      endpoint: '/api/tasks/:id',
      description: 'Delete a task',
      response: `{
  "success": true,
  "message": "Task deleted successfully"
}`,
      headers: ['Authorization: Bearer <token>']
    }
  ];

  const testAPI = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        status: 200,
        data: {
          success: true,
          message: 'API test successful',
          timestamp: new Date().toISOString()
        }
      };
      setTestResponse(JSON.stringify(mockResponse, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500';
      case 'POST': return 'bg-blue-500';
      case 'PUT': return 'bg-yellow-500';
      case 'DELETE': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Task Management API
              </h1>
              <p className="text-muted-foreground mt-2">
                RESTful API for task management with authentication and real-time notifications
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                API Status: Online
              </Badge>
              <Badge variant="outline">
                v2.1.0
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="authentication">Auth</TabsTrigger>
            <TabsTrigger value="testing">Test API</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Database</h3>
                  <p className="text-muted-foreground text-sm">
                    MySQL database with optimized queries and indexing for fast performance
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Security</h3>
                  <p className="text-muted-foreground text-sm">
                    JWT authentication with role-based access control and rate limiting
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Real-time</h3>
                  <p className="text-muted-foreground text-sm">
                    WebSocket notifications for instant updates and collaboration
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>API Features</CardTitle>
                <CardDescription>Comprehensive task management capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Core Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>CRUD operations for tasks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>User authentication & authorization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Role-based access control</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Task assignment & collaboration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Advanced Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Real-time notifications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>File attachments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Search & filtering</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Analytics & reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="bg-gradient-card border-border/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge className={`${getMethodColor(endpoint.method)} text-white`}>
                      {endpoint.method}
                    </Badge>
                    <code className="bg-muted px-3 py-1 rounded text-sm font-mono">
                      {endpoint.endpoint}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(endpoint.endpoint)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Headers</h4>
                    <div className="space-y-1">
                      {endpoint.headers.map((header, headerIndex) => (
                        <code key={headerIndex} className="block bg-muted p-2 rounded text-sm">
                          {header}
                        </code>
                      ))}
                    </div>
                  </div>

                  {endpoint.requestBody && (
                    <div>
                      <h4 className="font-semibold mb-2">Request Body</h4>
                      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
                        <code>{endpoint.requestBody}</code>
                      </pre>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2">Response</h4>
                    <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
                      <code>{endpoint.response}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Secure access using JWT tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Login Endpoint</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-blue-500 text-white">POST</Badge>
                      <code className="bg-muted px-3 py-1 rounded">/api/auth/login</code>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Request Body:</p>
                      <pre className="bg-muted p-3 rounded text-sm">
{`{
  "email": "user@example.com",
  "password": "securepassword123"
}`}
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Response:</p>
                      <pre className="bg-muted p-3 rounded text-sm">
{`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    }
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Using the Token</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Include the JWT token in the Authorization header for all protected endpoints:
                  </p>
                  <code className="block bg-muted p-3 rounded text-sm">
                    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                  </code>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Token Expiration</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Access tokens expire after 15 minutes</li>
                    <li>• Refresh tokens expire after 7 days</li>
                    <li>• Use the refresh endpoint to get new tokens</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>API Testing</CardTitle>
                <CardDescription>Test API endpoints directly from this interface</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Method</label>
                      <select 
                        value={testMethod} 
                        onChange={(e) => setTestMethod(e.target.value)}
                        className="w-full p-2 border border-border rounded bg-background"
                      >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Endpoint</label>
                      <Input
                        placeholder="/api/tasks"
                        value={testEndpoint}
                        onChange={(e) => setTestEndpoint(e.target.value)}
                      />
                    </div>
                    <Button 
                      onClick={testAPI} 
                      disabled={isLoading}
                      className="w-full bg-gradient-primary"
                    >
                      {isLoading ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" />
                          Testing...
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Test API
                        </>
                      )}
                    </Button>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Response</label>
                    <Textarea
                      value={testResponse}
                      readOnly
                      placeholder="API response will appear here..."
                      className="min-h-[200px] font-mono text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TaskAPIPage;