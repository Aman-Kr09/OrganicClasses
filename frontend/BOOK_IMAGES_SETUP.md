# Book Images Setup Guide for Organic Classes

## 📚 How to Add Book Images

The book cards on your courses page are already set up to display book images. Here's how to add them:

### 📁 Directory Structure
```
frontend/public/images/books/
├── ncert-science.jpg
├── ncert-commerce.jpg
├── rd-sharma.jpg
├── hc-verma.jpg
├── english-literature.jpg
└── sample-papers.jpg
```

### 🖼️ Current Book Image Requirements

**1. NCERT Science Complete Set**
- File: `ncert-science.jpg`
- Recommended size: 400x300px or similar aspect ratio
- Subject: Physics, Chemistry, Biology, Mathematics books

**2. NCERT Commerce Complete Set**
- File: `ncert-commerce.jpg`
- Recommended size: 400x300px or similar aspect ratio
- Subject: Accountancy, Economics, Business Studies books

**3. RD Sharma Mathematics**
- File: `rd-sharma.jpg`
- Recommended size: 400x300px or similar aspect ratio
- Subject: Mathematics reference book

**4. HC Verma Physics**
- File: `hc-verma.jpg`
- Recommended size: 400x300px or similar aspect ratio
- Subject: Physics reference book (Volume 1 & 2)

**5. English Literature Complete Set**
- File: `english-literature.jpg`
- Recommended size: 400x300px or similar aspect ratio
- Subject: English textbooks and literature

**6. Sample Papers & Practice Set**
- File: `sample-papers.jpg`
- Recommended size: 400x300px or similar aspect ratio
- Subject: Practice books and sample papers

### ✨ Features Already Built-In

1. **Automatic Fallback**: If an image fails to load, it shows a nice book icon with the book name
2. **Responsive Design**: Images automatically scale for different screen sizes
3. **Lazy Loading**: Images load efficiently as users scroll
4. **Error Handling**: Graceful fallback if images are missing

### 🚀 How to Add Images

1. **Save your book images** in the `frontend/public/images/books/` folder
2. **Use the exact filenames** listed above
3. **Recommended formats**: JPG, PNG, or WebP
4. **Recommended size**: 400x300px to 800x600px (4:3 aspect ratio works best)
5. **File size**: Keep under 500KB for fast loading

### 📝 Adding More Books

To add more books to the cards, you can:

1. **Add new images** to the `/images/books/` folder
2. **Update the code** in `app/courses/page.tsx` to reference new image paths
3. **Follow the same naming pattern** for consistency

### 🔧 Troubleshooting

- **Image not showing?** Check the filename matches exactly (case-sensitive)
- **Image too large?** Compress it or resize to recommended dimensions
- **Wrong aspect ratio?** The card will crop to fit, but 4:3 ratio works best

### 💡 Tips for Best Results

- Use high-quality book cover images or book photos
- Ensure good contrast and readability
- Consider using actual book covers for authenticity
- Maintain consistent styling across all book images

---

**Ready to add images?** Just drop your book images into the `frontend/public/images/books/` folder with the correct filenames, and they'll automatically appear on your website! 📚✨