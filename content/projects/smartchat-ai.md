---
title: "SmartChat — AI Chatbot Platform"
description: "A production-ready AI chatbot platform supporting multiple LLM providers, RAG pipelines, and real-time streaming responses."
image: "/images/projects/smartchat.png"
category: "AI/ML"
techStack: ["Python", "FastAPI", "React", "LangChain", "PostgreSQL", "Redis", "Docker"]
github: "https://github.com/yourusername/smartchat"
demo: "https://smartchat.demo.com"
featured: true
date: "2024-11-20"
---

## Overview

SmartChat is a full-stack AI chatbot platform that supports multiple LLM providers (OpenAI, Anthropic, Ollama) and implements Retrieval-Augmented Generation (RAG) for knowledge-base-grounded responses.

## Architecture

- **Backend:** FastAPI with async streaming endpoints
- **LLM Routing:** LangChain with provider abstraction layer
- **Vector Store:** pgvector for semantic search
- **Cache:** Redis for session state and rate limiting
- **Frontend:** React with Server-Sent Events for streaming UI

## Key Features

- Multi-provider LLM support with fallback routing
- Document ingestion pipeline (PDF, DOCX, web scraping)
- Real-time streaming with token-by-token display
- Conversation history and session persistence
- Role-based access with JWT authentication
