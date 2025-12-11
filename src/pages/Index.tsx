import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
