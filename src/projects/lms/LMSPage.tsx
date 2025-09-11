import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Clock, Users, Star, BookOpen, Award } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  progress: number;
  level: string;
  category: string;
  price: number;
  image: string;
}

const LMSPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([1, 3]);

  const courses: Course[] = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      duration: '40 hours',
      students: 15420,
      rating: 4.8,
      progress: 65,
      level: 'Beginner',
      category: 'Web Development',
      price: 99.99,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Advanced React & Redux',
      instructor: 'Sarah Wilson',
      duration: '25 hours',
      students: 8930,
      rating: 4.9,
      progress: 0,
      level: 'Advanced',
      category: 'Frontend',
      price: 79.99,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      instructor: 'Mike Johnson',
      duration: '30 hours',
      students: 12540,
      rating: 4.7,
      progress: 30,
      level: 'Intermediate',
      category: 'Backend',
      price: 89.99,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Python Data Science',
      instructor: 'Emily Chen',
      duration: '35 hours',
      students: 20100,
      rating: 4.8,
      progress: 0,
      level: 'Intermediate',
      category: 'Data Science',
      price: 109.99,
      image: '/placeholder.svg'
    }
  ];

  const enrollInCourse = (courseId: number) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses(prev => [...prev, courseId]);
    }
  };

  const getMyCourses = () => {
    return courses.filter(course => enrolledCourses.includes(course.id));
  };

  const getAvailableCourses = () => {
    return courses.filter(course => !enrolledCourses.includes(course.id));
  };

  const CourseCard = ({ course, showProgress = false }: { course: Course; showProgress?: boolean }) => (
    <Card className="bg-gradient-card border-border/20 hover:shadow-elegant transition-all duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center relative">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center">
            <Play className="h-12 w-12 text-white/80" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline">{course.category}</Badge>
              <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                {course.level}
              </Badge>
            </div>
            <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
            <CardDescription>by {course.instructor}</CardDescription>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            </div>
          </div>

          {showProgress && course.progress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl font-bold text-primary">${course.price}</span>
            {enrolledCourses.includes(course.id) ? (
              <Button className="bg-gradient-primary">
                {course.progress > 0 ? 'Continue' : 'Start Course'}
              </Button>
            ) : (
              <Button variant="outline" onClick={() => enrollInCourse(course.id)}>
                Enroll Now
              </Button>
            )}
          </div>
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
                Learning Management System
              </h1>
              <p className="text-muted-foreground mt-2">
                Master new skills with our comprehensive courses
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{enrolledCourses.length} Courses</span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>2 Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="my-courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="browse">Browse Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="my-courses" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">My Learning Journey</h2>
              {getMyCourses().length === 0 ? (
                <Card className="bg-gradient-card border-border/20">
                  <CardContent className="p-12 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No courses enrolled yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start your learning journey by enrolling in courses
                    </p>
                    <Button onClick={() => (document.querySelector('[value="browse"]') as HTMLElement)?.click()}>
                      Browse Courses
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getMyCourses().map((course) => (
                    <CourseCard key={course.id} course={course} showProgress={true} />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="browse" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getAvailableCourses().map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LMSPage;