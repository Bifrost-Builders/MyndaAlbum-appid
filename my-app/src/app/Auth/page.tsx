import ImageGrid from './comp/imagesGrid';
import AuthBlock from './comp/authBlock';
export default function LoginPage() {
    return (
      <section className="h-screen w-full bg-black grid overflow-hidden relative">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-red-600 blur-3xl absolute left-1 w-full h-16"></div>
        <div className="bg-gradient-to-r from-blue-500 via-yellow-600 to-yellow-600 blur-3xl absolute top-3 w-full h-24"></div>
        
        <ImageGrid />

        <AuthBlock />

      </section>
        
    );
}