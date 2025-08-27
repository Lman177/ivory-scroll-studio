'use client';

'use client';

import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved or doesn't exist.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/templates">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Templates
                </Link>
              </Button>
            </div>
            
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
