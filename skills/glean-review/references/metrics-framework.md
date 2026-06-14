# Metrics Framework

How to calculate and interpret pipeline metrics.

## Core Metrics

### Response Rate
```
response_rate = replied / contacted × 100
```
- Good: >20%
- Average: 10-20%
- Bad: <10%

### Conversion Rate
```
conversion_rate = converted / contacted × 100
```
- Good: >5%
- Average: 2-5%
- Bad: <2%

### Channel Performance
```
channel_response_rate = channel_replied / channel_contacted × 100
```
Compare across channels to see which works best.

### Follow-Up Effectiveness
```
follow_up_reply_rate = replies_from_followups / total_followups × 100
```
Shows if follow-ups are worth sending.

## Analysis Patterns

### What's Working
- High response rate channel → double down
- High conversion persona → target more like them
- Messaging pattern that gets replies → use more

### What's Not Working
- Low response rate channel → pause or change approach
- No conversions from a persona → stop targeting
- Messages that never get replies → rewrite

### Bottleneck Analysis
- Lots of contacts, few replies → messaging problem
- Lots of replies, few meetings → qualification problem
- Lots of meetings, few conversions → product/pricing problem

## Reporting

Present metrics in this order:
1. Summary (total leads, by stage)
2. Channel comparison (which channel works best)
3. What's working (patterns to keep)
4. What's not (patterns to stop)
5. Recommendations (what to do next)
