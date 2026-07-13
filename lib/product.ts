export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "KidPrivacy",
  slug: "kidprivacy",
  tagline: "Know if a kids' app is safe before they tap install.",
  description: "KidPrivacy scans children's apps and games for COPPA and GDPR-K compliance, excessive data collection, and ad tracking, then gives parents and schools a plain-language safety verdict.",
  toolTitle: "Child Privacy Check",
  resultLabel: "Privacy Score",
  ctaLabel: "Check Now",
  features: [
  "Flag apps that collect kids' data unsafely",
  "Check age-appropriate use and parental controls",
  "Get a family privacy score",
  "Receive a simple parent action checklist"
],
  inputs: [
  {
    "key": "apps_used",
    "label": "Apps or Devices Your Child Uses",
    "type": "textarea",
    "placeholder": "e.g. TikTok, Roblox, smart speaker"
  },
  {
    "key": "child_age",
    "label": "Child's Age",
    "type": "text",
    "placeholder": "e.g. 9"
  },
  {
    "key": "concern_focus",
    "label": "Privacy Focus",
    "type": "select",
    "options": [
      "Data collection",
      "Screen time / ads",
      "Stranger contact",
      "All"
    ]
  }
] as InputField[],
  systemPrompt: "You are KidPrivacy, a children's online-privacy advisor for parents. Given the apps or devices a child uses, the child's age, and the parent's privacy focus, assess the family's privacy posture and highlight risks. Always structure your response as: (1) a family privacy score from 0-100, (2) risky apps or features with the specific concern, (3) recommended parental controls, and (4) a simple parent action checklist. Be clear and non-alarmist. In demo (mock) mode, return a realistic sample check following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Scan top apps"
  },
  {
    "tier": "Family",
    "price": "$9/mo",
    "desc": "Full multi-child coverage"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const apps = (inputs['apps_used'] || '').trim()
  const age = (inputs['child_age'] || '').trim()
  const focus = inputs['concern_focus'] || 'All'
  if (!apps) return 'List the apps or devices your child uses to run the privacy check.'
  const score = 48
  let out = 'CHILD PRIVACY CHECK - age ' + (age || '?') + ', focus: ' + focus + '\n\n'
  out += 'Family privacy score: ' + score + '/100 (needs attention)\n\n'
  out += 'Risky apps / features:\n'
  out += '  - TikTok: data collection + ad profiling; under-13 needs parental consent (COPPA)\n'
  out += '  - Roblox: chat with strangers enabled by default\n\n'
  out += 'Recommended parental controls:\n'
  out += '  - Enable restricted mode + family link\n'
  out += '  - Disable direct messaging where possible\n\n'
  out += 'Parent action checklist:\n'
  out += '  - [ ] Review each app age rating\n'
  out += '  - [ ] Set screentime + purchase PIN\n'
  out += '\n--- (Mock demo. Family plan unlocks full multi-child coverage.)'
  return out
}
}
