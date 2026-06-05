---
title: "Getting Started with LangChain and RAG Pipelines in Python"
excerpt: "Learn how to build a Retrieval-Augmented Generation pipeline from scratch using LangChain, FAISS, and OpenAI — with working code you can run today."
coverImage: "/images/blog/langchain-rag.png"
date: "2024-12-05"
tags: ["Python", "AI", "LangChain", "RAG", "LLM"]
readTime: "12 min read"
author: "Your Name"
---

## What is RAG?

Retrieval-Augmented Generation (RAG) lets your LLM answer questions grounded in your own documents — without fine-tuning. It works by:

1. **Indexing** your documents into a vector store
2. **Retrieving** relevant chunks at query time
3. **Augmenting** the LLM prompt with those chunks

## Setting Up

```bash
pip install langchain openai faiss-cpu tiktoken
```

## Building the Pipeline

```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# Load and split
loader = PyPDFLoader("your_document.pdf")
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)

# Embed and store
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(chunks, embeddings)

# Build QA chain
qa = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3})
)

# Query!
result = qa.run("What is the main topic of this document?")
print(result)
```

## Tips for Production

- Use **pgvector** instead of FAISS for persistent, scalable storage
- Add **re-ranking** with Cohere or a cross-encoder for better retrieval
- Cache embeddings to reduce OpenAI API costs
- Stream responses for better UX

RAG is one of the most practical LLM patterns today — start building!
