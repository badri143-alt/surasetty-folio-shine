import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye,
  BarChart3,
  Calendar,
  Clock,
  Plus,
  Trash2,
  Edit
} from 'lucide-react';

const DashboardPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('overview');
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [newPost, setNewPost] = useState({
    platform: '',
    content: '',
    scheduledTime: ''
  });
  const { toast } = useToast();

  const stats = {
    overview: {
      followers: 45672,
      engagement: 8.5,
      posts: 156,
      reach: 125890
    },
    instagram: {
      followers: 18500,
      engagement: 12.3,
      posts: 67,
      reach: 45600
    },
    twitter: {
      followers: 15200,
      engagement: 6.8,
      posts: 89,
      reach: 38200
    },
    facebook: {
      followers: 11972,
      engagement: 4.2,
      posts: 45,
      reach: 42090
    }
  };

  const recentPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Beautiful sunset from yesterday\'s photography session 📸',
      timestamp: '2 hours ago',
      likes: 247,
      comments: 18,
      shares: 12,
      views: 1240,
      engagement: 22.4
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Just launched our new product! Excited to share this journey with you all 🚀',
      timestamp: '4 hours ago',
      likes: 89,
      comments: 23,
      shares: 31,
      views: 890,
      engagement: 16.1
    },
    {
      id: 3,
      platform: 'Facebook',
      content: 'Thank you for all the support on our latest project. Your feedback means everything!',
      timestamp: '1 day ago',
      likes: 156,
      comments: 34,
      shares: 8,
      views: 2100,
      engagement: 9.4
    }
  ];

  const initialUpcomingPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Behind the scenes of our creative process...',
      scheduledTime: 'Today at 3:00 PM',
      status: 'scheduled'
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Weekly tips for productivity and growth',
      scheduledTime: 'Tomorrow at 9:00 AM',
      status: 'draft'
    }
  ];

  const [upcomingPostsList, setUpcomingPostsList] = useState(initialUpcomingPosts);

  const handleSchedulePost = () => {
    if (!newPost.platform || !newPost.content || !newPost.scheduledTime) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const post = {
      id: Date.now(),
      platform: newPost.platform,
      content: newPost.content,
      scheduledTime: newPost.scheduledTime,
      status: 'scheduled'
    };

    setUpcomingPostsList(prev => [...prev, post]);
    setNewPost({ platform: '', content: '', scheduledTime: '' });
    setIsScheduleDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Post scheduled successfully!",
    });
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setNewPost({
      platform: post.platform,
      content: post.content,
      scheduledTime: post.scheduledTime
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdatePost = () => {
    if (!newPost.platform || !newPost.content || !newPost.scheduledTime) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setUpcomingPostsList(prev => 
      prev.map(post => 
        post.id === editingPost.id 
          ? { ...post, platform: newPost.platform, content: newPost.content, scheduledTime: newPost.scheduledTime }
          : post
      )
    );

    setNewPost({ platform: '', content: '', scheduledTime: '' });
    setEditingPost(null);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Post updated successfully!",
    });
  };

  const handleDeletePost = (postId: number) => {
    setUpcomingPostsList(prev => prev.filter(post => post.id !== postId));
    toast({
      title: "Success",
      description: "Post deleted successfully!",
    });
  };

  const currentStats = stats[selectedPlatform as keyof typeof stats];

  const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <Card className="bg-gradient-card border-border/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm flex items-center mt-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className={`h-4 w-4 mr-1 ${trend === 'down' ? 'rotate-180' : ''}`} />
              {change}
            </p>
          </div>
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Social Media Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Monitor and manage your social media presence
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Post
              </Button>
              <Button className="bg-gradient-primary">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="overview" onClick={() => setSelectedPlatform('overview')}>Overview</TabsTrigger>
            <TabsTrigger value="instagram" onClick={() => setSelectedPlatform('instagram')}>Instagram</TabsTrigger>
            <TabsTrigger value="twitter" onClick={() => setSelectedPlatform('twitter')}>Twitter</TabsTrigger>
            <TabsTrigger value="facebook" onClick={() => setSelectedPlatform('facebook')}>Facebook</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedPlatform} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Followers"
                value={currentStats.followers.toLocaleString()}
                change="+12.5%"
                icon={Users}
                trend="up"
              />
              <StatCard
                title="Engagement Rate"
                value={`${currentStats.engagement}%`}
                change="+2.1%"
                icon={Heart}
                trend="up"
              />
              <StatCard
                title="Total Posts"
                value={currentStats.posts}
                change="+8"
                icon={MessageCircle}
                trend="up"
              />
              <StatCard
                title="Reach"
                value={currentStats.reach.toLocaleString()}
                change="+15.3%"
                icon={Eye}
                trend="up"
              />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Posts */}
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Recent Posts Performance</CardTitle>
                  <CardDescription>Track how your latest content is performing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="border border-border/20 rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{post.platform}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.timestamp}
                          </span>
                        </div>
                        <p className="text-sm">{post.content}</p>
                        <div className="grid grid-cols-4 gap-4 text-center">
                          <div className="space-y-1">
                            <div className="flex items-center justify-center">
                              <Heart className="h-4 w-4 text-red-500" />
                            </div>
                            <p className="text-sm font-medium">{post.likes}</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-center">
                              <MessageCircle className="h-4 w-4 text-blue-500" />
                            </div>
                            <p className="text-sm font-medium">{post.comments}</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-center">
                              <Share2 className="h-4 w-4 text-green-500" />
                            </div>
                            <p className="text-sm font-medium">{post.shares}</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-center">
                              <Eye className="h-4 w-4 text-purple-500" />
                            </div>
                            <p className="text-sm font-medium">{post.views}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Engagement Rate</span>
                            <span>{post.engagement}%</span>
                          </div>
                          <Progress value={post.engagement} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Scheduled Posts */}
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Upcoming Posts</CardTitle>
                  <CardDescription>Manage your scheduled and draft content</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                  {upcomingPostsList.map((post) => (
                      <div key={post.id} className="border border-border/20 rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{post.platform}</Badge>
                          <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                        </div>
                        <p className="text-sm">{post.content}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.scheduledTime}
                          </span>
                          <div className="space-x-2">
                            <Button size="sm" variant="outline" onClick={() => handleEditPost(post)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeletePost(post.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                  ))}
                  
                  <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Schedule New Post
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Schedule New Post</DialogTitle>
                        <DialogDescription>
                          Create and schedule a new social media post.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="platform" className="text-right">
                            Platform
                          </Label>
                          <Select value={newPost.platform} onValueChange={(value) => setNewPost(prev => ({ ...prev, platform: value }))}>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Instagram">Instagram</SelectItem>
                              <SelectItem value="Twitter">Twitter</SelectItem>
                              <SelectItem value="Facebook">Facebook</SelectItem>
                              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="content" className="text-right">
                            Content
                          </Label>
                          <Textarea
                            id="content"
                            value={newPost.content}
                            onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                            placeholder="Write your post content..."
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="time" className="text-right">
                            Schedule
                          </Label>
                          <Input
                            id="time"
                            type="datetime-local"
                            value={newPost.scheduledTime}
                            onChange={(e) => setNewPost(prev => ({ ...prev, scheduledTime: e.target.value }))}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleSchedulePost}>Schedule Post</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Post</DialogTitle>
                        <DialogDescription>
                          Make changes to your scheduled post.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-platform" className="text-right">
                            Platform
                          </Label>
                          <Select value={newPost.platform} onValueChange={(value) => setNewPost(prev => ({ ...prev, platform: value }))}>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Instagram">Instagram</SelectItem>
                              <SelectItem value="Twitter">Twitter</SelectItem>
                              <SelectItem value="Facebook">Facebook</SelectItem>
                              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-content" className="text-right">
                            Content
                          </Label>
                          <Textarea
                            id="edit-content"
                            value={newPost.content}
                            onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                            placeholder="Write your post content..."
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-time" className="text-right">
                            Schedule
                          </Label>
                          <Input
                            id="edit-time"
                            type="datetime-local"
                            value={newPost.scheduledTime}
                            onChange={(e) => setNewPost(prev => ({ ...prev, scheduledTime: e.target.value }))}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleUpdatePost}>Update Post</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;