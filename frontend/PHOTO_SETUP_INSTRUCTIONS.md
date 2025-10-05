# Photo Carousel Setup Instructions

## 📁 Directory Structure
Create this folder structure in your project:

```
frontend/
└── public/
    └── images/
        └── gallery/
            ├── classroom1.jpg
            ├── students1.jpg
            ├── faculty1.jpg
            ├── lab1.jpg
            ├── library1.jpg
            └── event1.jpg
```

## 📸 Adding Your Photos

1. **Create the gallery folder:**
   ```bash
   mkdir -p public/images/gallery
   ```

2. **Add your photos** with these exact names:
   - `classroom1.jpg` - Photo of your classroom
   - `students1.jpg` - Photo of students
   - `faculty1.jpg` - Photo of faculty members
   - `lab1.jpg` - Photo of laboratory
   - `library1.jpg` - Photo of library
   - `event1.jpg` - Photo of institute events

3. **Photo Requirements:**
   - **Format:** JPG, PNG, or WebP
   - **Size:** Recommended 800x600px or higher
   - **Aspect Ratio:** 4:3 or 16:9 works best
   - **File Size:** Keep under 500KB for faster loading

## 🎛️ Carousel Features

✅ **Auto-advance** - Changes slides every 4 seconds
✅ **Navigation arrows** - Click left/right to navigate
✅ **Dot indicators** - Click dots to jump to specific slides
✅ **Smooth transitions** - Animated slide changes
✅ **Responsive design** - Works on all screen sizes
✅ **Fallback display** - Shows placeholder when photos aren't found

## 🔧 Customization

To add more photos or change titles, edit the `galleryPhotos` array in `Hero.tsx`:

```javascript
const galleryPhotos = [
  {
    id: 1,
    src: '/images/gallery/your-photo.jpg',
    alt: 'Description of photo',
    title: 'Photo Title'
  },
  // Add more photos here...
]
```

## 🚀 Testing

1. Add your photos to the gallery folder
2. Start your development server: `npm run dev`
3. Visit your homepage to see the carousel in action
4. If photos don't show, check the file paths and names match exactly

## 📱 Mobile Optimization

The carousel is fully responsive and optimized for:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ Touch navigation
- ✅ Keyboard navigation

Enjoy your new photo carousel! 🎉