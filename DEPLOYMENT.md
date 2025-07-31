# 🚀 Deployment Guide - NewCountertops.com

## ✅ Pre-Deployment Checklist

### 1. Environment Variables (.env.local)
```bash
# Database
DATABASE_URL="your-production-database-url"

# NextAuth.js
NEXTAUTH_SECRET="your-production-secret-32-chars-minimum"
NEXTAUTH_URL="https://your-domain.com"
NODE_ENV="production"

# Email (Optional - for notifications)
EMAIL_SERVER="smtp://username:password@smtp.provider.com:587"
EMAIL_FROM="noreply@your-domain.com"

# Twilio (Optional - for SMS)
TWILIO_ACCOUNT_SID="your-twilio-account-sid"
TWILIO_AUTH_TOKEN="your-twilio-auth-token"
TWILIO_PHONE_NUMBER="your-twilio-phone-number"

# Stripe (Optional - for payments)
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Security
CSRF_SECRET="your-csrf-secret-key"
```

### 2. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to production database
npm run db:push

# (Optional) Seed with sample data
npm run db:seed
```

### 3. Build Verification
```bash
# Clean build (removes cache for fresh build)
npm run build:clean

# Test production build locally
npm run build
npm run start

# Analyze bundle size (optional)
npm run build:analyze

# Verify all pages load correctly
# Test quote form submission
# Test contractor search functionality
```

## 🚀 Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push
4. Custom domain setup in Vercel settings

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set environment variables in Netlify dashboard

### Railway
1. Connect GitHub repository
2. Add PostgreSQL database
3. Set environment variables
4. Deploy automatically

### Render (Full-Stack Ready)
1. Create PostgreSQL database service
2. Create web service from GitHub
3. Configure build/start commands:
   - **Build Command**: `npm ci && npm run db:generate && npm run build`
   - **Start Command**: `npm run start`
   - **Node Version**: `18` or `20`
4. Set environment variables (DATABASE_URL, NEXTAUTH_SECRET, etc.)
5. Deploy automatically on git push

### Self-Hosted
1. Set up Node.js server (18+)
2. Install PM2 for process management
3. Configure Nginx reverse proxy
4. Set up SSL certificates
5. Configure database connections

## 🔧 Production Configuration

### Database
- Use PostgreSQL for production (not SQLite)
- Set up connection pooling
- Configure backups
- Set up monitoring

### Security
- Enable HTTPS/SSL
- Configure CORS policies
- Set up rate limiting
- Enable security headers
- Set strong JWT secrets

### Performance
- Enable caching headers
- Configure CDN for static assets
- Set up image optimization
- Enable compression

### Monitoring
- Set up error tracking (Sentry)
- Configure analytics
- Set up uptime monitoring
- Enable logging

## 📋 Post-Deployment Tasks

### 1. Functionality Tests
- [ ] Homepage loads correctly
- [ ] Contractor search works
- [ ] Quote form submission
- [ ] User registration
- [ ] Authentication flows
- [ ] All manufacturer pages
- [ ] Mobile responsiveness

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Configure meta tags
- [ ] Set up Google Analytics
- [ ] Add schema markup
- [ ] Configure robots.txt

### 3. Business Setup
- [ ] Configure email notifications
- [ ] Set up payment processing
- [ ] Add customer support system
- [ ] Configure SMS notifications
- [ ] Set up analytics tracking

## 🔄 CI/CD Pipeline

### GitHub Actions (Recommended)
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🛠️ Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor performance metrics
- Review security logs
- Backup database weekly
- Update contractor profiles
- Monitor user feedback

### Scaling Considerations
- Database connection pooling
- CDN for static assets
- Load balancing for high traffic
- Caching strategies
- API rate limiting
- Image optimization

## 🚨 Troubleshooting

### Common Issues
1. **Build Errors**: Check environment variables
2. **Database Connection**: Verify DATABASE_URL
3. **Authentication Issues**: Check NEXTAUTH_SECRET
4. **API Failures**: Review rate limiting
5. **Performance**: Enable caching and CDN

### Render-Specific Issues
**"Could not open requirements file" Error:**
- Render is detecting your app as Python instead of Node.js
- **Solution 1**: Add `render.yaml` file (included in project)
- **Solution 2**: Ensure `package.json` has `engines` field
- **Solution 3**: In Render dashboard, manually set Environment to "Node"

**Build Command Not Found:**
- Verify your `package.json` scripts section
- Use: `npm ci && npm run db:generate && npm run build`

**Database Connection Issues:**
- Use the Internal Database URL from Render PostgreSQL
- Format: `postgresql://user:pass@host:port/db`
- Set in Environment Variables, not hardcoded

### Debug Tools
- Next.js build analyzer
- Vercel function logs
- Database query monitoring
- Error tracking dashboards
- Performance monitoring

## 📞 Support

For deployment support, check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Prisma Production Guide](https://www.prisma.io/docs/guides/deployment)

---

## 🎉 Ready for Production!

Your NewCountertops.com marketplace is now ready for deployment with:
- ✅ Complete feature set
- ✅ Security hardening
- ✅ Performance optimization
- ✅ Mobile responsiveness
- ✅ SEO optimization
- ✅ Comprehensive testing

**Launch with confidence!** 🚀
