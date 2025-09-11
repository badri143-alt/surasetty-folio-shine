import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  Users, 
  Shield, 
  Zap, 
  FileText, 
  Lock,
  CheckCircle,
  AlertCircle,
  Send,
  Globe,
  Server
} from 'lucide-react';

interface ChatRoom {
  id: string;
  name: string;
  participants: number;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
}

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  type: 'text' | 'file' | 'system';
}

const ChatAPIPage = () => {
  const [activeRoom, setActiveRoom] = useState('general');
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  const chatRooms: ChatRoom[] = [
    {
      id: 'general',
      name: 'General Discussion',
      participants: 42,
      lastMessage: 'Hey everyone! How\'s the new API working?',
      timestamp: '2 min ago',
      isOnline: true
    },
    {
      id: 'development',
      name: 'Development Team',
      participants: 8,
      lastMessage: 'Just pushed the latest updates to staging',
      timestamp: '5 min ago',
      isOnline: true
    },
    {
      id: 'support',
      name: 'Customer Support',
      participants: 15,
      lastMessage: 'Issue resolved, thanks for the quick response!',
      timestamp: '10 min ago',
      isOnline: true
    }
  ];

  const messages: Message[] = [
    {
      id: '1',
      user: 'Alice',
      content: 'The new chat API is working great! Real-time messages are super fast.',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: '2',
      user: 'Bob',
      content: 'Agreed! The file sharing feature is exactly what we needed.',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: '3',
      user: 'System',
      content: 'Charlie has joined the room',
      timestamp: '10:35 AM',
      type: 'system'
    },
    {
      id: '4',
      user: 'Charlie',
      content: 'Hey team! Just testing the WebSocket connection.',
      timestamp: '10:36 AM',
      type: 'text'
    },
    {
      id: '5',
      user: 'Alice',
      content: 'document.pdf',
      timestamp: '10:38 AM',
      type: 'file'
    }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/chat/rooms',
      description: 'Get all available chat rooms',
      response: `{
  "success": true,
  "data": [
    {
      "id": "room_123",
      "name": "General Discussion",
      "description": "Main chat room for all users",
      "participants_count": 42,
      "created_at": "2024-01-15T10:00:00Z",
      "is_private": false
    }
  ]
}`
    },
    {
      method: 'POST',
      endpoint: '/api/chat/rooms',
      description: 'Create a new chat room',
      requestBody: `{
  "name": "New Room",
  "description": "Room description",
  "is_private": false,
  "max_participants": 50
}`,
      response: `{
  "success": true,
  "data": {
    "id": "room_124",
    "name": "New Room",
    "description": "Room description",
    "created_by": "user_123",
    "created_at": "2024-01-17T11:00:00Z"
  }
}`
    },
    {
      method: 'POST',
      endpoint: '/api/chat/messages',
      description: 'Send a message to a chat room',
      requestBody: `{
  "room_id": "room_123",
  "content": "Hello everyone!",
  "type": "text"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "msg_456",
    "content": "Hello everyone!",
    "user_id": "user_123",
    "room_id": "room_123",
    "created_at": "2024-01-17T11:30:00Z",
    "type": "text"
  }
}`
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Simulate sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
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
                Real-time Chat API
              </h1>
              <p className="text-muted-foreground mt-2">
                Scalable chat application with rooms, file sharing, and message encryption
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className={isConnected ? "text-green-600 border-green-600" : "text-red-600 border-red-600"}>
                {isConnected ? <CheckCircle className="h-4 w-4 mr-1" /> : <AlertCircle className="h-4 w-4 mr-1" />}
                {isConnected ? 'Connected' : 'Disconnected'}
              </Badge>
              <Badge variant="outline">
                WebSocket Active
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="demo" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="demo">Live Demo</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="api">API Docs</TabsTrigger>
            <TabsTrigger value="websocket">WebSocket</TabsTrigger>
          </TabsList>

          <TabsContent value="demo" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
              {/* Chat Rooms Sidebar */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-card border-border/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Chat Rooms</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {chatRooms.map((room) => (
                      <div
                        key={room.id}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          activeRoom === room.id ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30 hover:bg-muted/50'
                        }`}
                        onClick={() => setActiveRoom(room.id)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-sm">{room.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {room.participants}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {room.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {room.timestamp}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-3">
                <Card className="bg-gradient-card border-border/20 h-full flex flex-col">
                  <CardHeader className="border-b border-border/20">
                    <div className="flex items-center justify-between">
                      <CardTitle>
                        {chatRooms.find(r => r.id === activeRoom)?.name || 'General Discussion'}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {chatRooms.find(r => r.id === activeRoom)?.participants || 0} participants
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {/* Messages */}
                  <CardContent className="flex-1 p-0 overflow-hidden">
                    <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === 'system' ? 'justify-center' : 'justify-start'}`}>
                          {message.type === 'system' ? (
                            <div className="text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                              {message.content}
                            </div>
                          ) : (
                            <div className="max-w-[70%]">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium">{message.user}</span>
                                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                              </div>
                              <div className={`p-3 rounded-lg ${
                                message.type === 'file' 
                                  ? 'bg-blue-500/10 border border-blue-500/20' 
                                  : 'bg-muted/30'
                              }`}>
                                {message.type === 'file' ? (
                                  <div className="flex items-center space-x-2">
                                    <FileText className="h-4 w-4 text-blue-500" />
                                    <span className="text-sm">{message.content}</span>
                                  </div>
                                ) : (
                                  <p className="text-sm">{message.content}</p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t border-border/20 p-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={sendMessage} className="bg-gradient-primary">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Real-time Messaging</h3>
                  <p className="text-muted-foreground text-sm">
                    Instant message delivery using WebSocket connections for seamless communication
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Chat Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    Create public or private rooms with customizable participant limits
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">File Sharing</h3>
                  <p className="text-muted-foreground text-sm">
                    Share documents, images, and files with automatic virus scanning
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Message Encryption</h3>
                  <p className="text-muted-foreground text-sm">
                    End-to-end encryption ensures your conversations remain private and secure
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Scalable Architecture</h3>
                  <p className="text-muted-foreground text-sm">
                    Built on Node.js and MongoDB to handle thousands of concurrent users
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Cross-platform</h3>
                  <p className="text-muted-foreground text-sm">
                    RESTful API works seamlessly across web, mobile, and desktop applications
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="bg-gradient-card border-border/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge className={`${
                      endpoint.method === 'GET' ? 'bg-green-500' : 
                      endpoint.method === 'POST' ? 'bg-blue-500' : 
                      'bg-yellow-500'
                    } text-white`}>
                      {endpoint.method}
                    </Badge>
                    <code className="bg-muted px-3 py-1 rounded text-sm font-mono">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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

          <TabsContent value="websocket" className="space-y-6">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>WebSocket Connection</CardTitle>
                <CardDescription>Real-time bidirectional communication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Connection URL</h4>
                  <code className="block bg-muted p-3 rounded text-sm">
                    wss://api.example.com/chat/ws?token=your_jwt_token
                  </code>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Message Events</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-sm mb-2">Join Room</h5>
                      <pre className="bg-muted p-3 rounded text-sm">
{`{
  "type": "join_room",
  "data": {
    "room_id": "room_123"
  }
}`}
                      </pre>
                    </div>

                    <div>
                      <h5 className="font-medium text-sm mb-2">Send Message</h5>
                      <pre className="bg-muted p-3 rounded text-sm">
{`{
  "type": "message",
  "data": {
    "room_id": "room_123",
    "content": "Hello everyone!",
    "message_type": "text"
  }
}`}
                      </pre>
                    </div>

                    <div>
                      <h5 className="font-medium text-sm mb-2">Receive Message</h5>
                      <pre className="bg-muted p-3 rounded text-sm">
{`{
  "type": "message_received",
  "data": {
    "id": "msg_456",
    "user": {
      "id": "user_123",
      "name": "John Doe"
    },
    "content": "Hello everyone!",
    "room_id": "room_123",
    "timestamp": "2024-01-17T11:30:00Z"
  }
}`}
                      </pre>
                    </div>
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

export default ChatAPIPage;