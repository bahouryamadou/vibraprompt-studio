import Anthropic from "@anthropic-ai/sdk";

export async function POST(req) {

const { prompt } = await req.json();

const anthropic = new Anthropic({
apiKey: process.env.ANTHROPIC_API_KEY
});

const response = await anthropic.messages.create({
model: "claude-sonnet-4",
max_tokens: 8000,
messages: [
{
role: "user",
content: `
Crée un site vitrine complet.

${prompt}

Retourne uniquement le HTML.
`
}
]
});

return Response.json({
html: response.content[0].text
});

}
