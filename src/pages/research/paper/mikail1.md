---
layout: '~/layouts/MarkdownLayout.astro'

title: 'LegalGuardian: A Privacy-Preserving Framework for Secure Integration of Large Language Models in Legal Practice'
author: 'M. Mikail Demir, Hakan T. Otal, M. Abdullah Canbaz'
venue: 'PPAI-25: The 6th AAAI Workshop on Privacy-Preserving Artificial Intelligence'
date: '2025-3-3'
---

[Paper Link](https://arxiv.org/abs/2501.10915)

**Abstract**

Large Language Models (LLMs) hold promise for advancing legal practice by automating complex tasks and improving access to justice. However, their adoption is limited by concerns over client confidentiality, especially when lawyers include sensitive Personally Identifiable Information (PII) in prompts, risking unauthorized data exposure. To mitigate this, we introduce LegalGuardian, a lightweight, privacy-preserving framework tailored for lawyers using LLM-based tools. LegalGuardian employs Named Entity Recognition (NER) techniques and local LLMs to mask and unmask confidential PII within prompts, safeguarding sensitive data before any external interaction. We detail its development and assess its effectiveness using a synthetic prompt library in immigration law scenarios. Comparing traditional NER models with one-shot prompted local LLM, we find that LegalGuardian achieves a F1-score of 93% with GLiNER and 97% with Qwen2.5-14B in PII detection. Semantic similarity analysis confirms that the framework maintains high fidelity in outputs, ensuring robust utility of LLM-based tools. Our findings indicate that legal professionals can harness advanced AI technologies without compromising client confidentiality or the quality of legal documents.
