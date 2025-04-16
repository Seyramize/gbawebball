import Image from "next/image"
import { Button } from "@/components/ui/button"
import ImageGallery from "../components/image-gallery"

export default function ImageGuidePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Image Implementation Guide</h1>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Create an Images Folder</h2>
          <p className="text-gray-700">
            First, create a folder called <code className="bg-gray-100 px-2 py-1 rounded">public/images</code> in your
            project root. This is where you'll store all your image files.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="font-medium">Example folder structure:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
              {`public/
  ├── images/
  │   ├── hero-image.jpg
  │   ├── about-team.jpg
  │   ├── cubs-training.jpg
  │   ├── elite-players.jpg
  │   └── vipers-team.jpg
  └── favicon.ico`}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Using the Next.js Image Component</h2>
          <p className="text-gray-700">
            Next.js provides an optimized <code className="bg-gray-100 px-2 py-1 rounded">Image</code> component that
            automatically handles:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Responsive sizes</li>
            <li>Lazy loading</li>
            <li>Image optimization</li>
            <li>Preventing layout shift</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Fixed Size Image</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Example fixed size image"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4 overflow-x-auto text-sm">
                  {`<Image
  src="/images/hero-image.jpg"
  alt="Hero image"
  width={800}
  height={600}
  className="object-cover"
/>`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Fill Container Image</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Example fill image"
                    fill
                    className="object-cover"
                  />
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4 overflow-x-auto text-sm">
                  {`<div className="relative h-64 w-full">
  <Image
    src="/images/team-photo.jpg"
    alt="Team photo"
    fill
    className="object-cover"
  />
</div>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Image Gallery Example</h2>
          <p className="text-gray-700">
            Here's an example of an image gallery component you can use to showcase multiple photos:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ImageGallery />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Image Optimization Tips</h2>
          <div className="bg-amber-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  ✓
                </span>
                <span>
                  Use the <code className="bg-white px-2 py-0.5 rounded">sizes</code> prop to help the browser select
                  the right image size
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  ✓
                </span>
                <span>
                  Add <code className="bg-white px-2 py-0.5 rounded">priority</code> to images that are above the fold
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  ✓
                </span>
                <span>Optimize your images before uploading (compress, resize to needed dimensions)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  ✓
                </span>
                <span>Use modern formats like WebP or AVIF for better compression</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Replacing Images in Your Website</h2>
          <p className="text-gray-700 mb-6">To replace the placeholder images in your website, follow these steps:</p>

          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-900 text-white flex items-center justify-center">
                1
              </span>
              <span>
                Add your images to the <code className="bg-gray-100 px-2 py-1 rounded">public/images</code> folder
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-900 text-white flex items-center justify-center">
                2
              </span>
              <span>
                Update the <code className="bg-gray-100 px-2 py-1 rounded">src</code> attribute in each Image component
                to point to your new images
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-900 text-white flex items-center justify-center">
                3
              </span>
              <span>
                Update the <code className="bg-gray-100 px-2 py-1 rounded">alt</code> text to accurately describe each
                image
              </span>
            </li>
          </ol>

          <div className="mt-8">
            <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Get Started with Images</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
