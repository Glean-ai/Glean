# Email Finder Workflow

How to find email addresses for leads using BrowserAct.

## Strategy

Emails are found through multiple sources. Try in order:

### 1. LinkedIn Profile

Check the lead's LinkedIn profile for:
- Contact info section (may show email)
- Website link (may lead to company site with email)

### 2. Company Website

Visit the company website:
- Check /about page
- Check /team page
- Check /contact page
- Look for email in footer

### 3. Email Pattern

If you know the company domain, try common patterns:
- firstname@domain.com
- firstnamelastname@domain.com
- first.lastname@domain.com
- lastname@domain.com

### 4. Hunter.io

Use Hunter.io to find email patterns:
- Search by domain
- Shows common pattern + confidence score

### 5. Email Verification

Before adding to CSV, verify the email:
- Use mailtester.com or similar
- Check if email format is valid
- Check if domain has MX records

## Skip Rules

- Skip if email already found in CSV
- Skip if no company website (can't find domain)
- Skip if email verification fails
- Skip if company uses personal emails (no pattern)

## Output

Add email to leads.csv in the email field. Only add verified emails.

## Rate Limits

- Max 50 email searches per day (Hunter.io free tier)
- Space out requests: 1 every 2-3 seconds
- If rate limited, stop and report
