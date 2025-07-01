# Klaviyo Integration Setup

## Environment Variables Required

Create a `.env` file in your project root with the following variables:

```bash
# Klaviyo Integration
KLAVIYO_API_KEY=pk_910847da95ec868fb1d419e7a9d2bb3026
KLAVIYO_LIST_ID=UmfGNc
```

## Security

- The API key and List ID are now securely stored server-side
- No sensitive data is exposed in client-side code
- All Klaviyo API calls are made from the secure server endpoint

## How it Works

1. Frontend form submits to `/api/affiliate/apply`
2. Server endpoint validates data and calls Klaviyo API
3. User profile is created, subscribed to list, and event is tracked
4. Success/error response is returned to frontend

## Files Modified

- `src/routes/api/affiliate/apply/+server.ts` - Secure server endpoint
- `src/routes/affiliate/apply/+page.svelte` - Updated to use server API
- `src/app.html` - Removed exposed Klaviyo scripts

## Testing

After creating the `.env` file, restart your development server and test the form submission. Check your Klaviyo dashboard for new profiles and events. 