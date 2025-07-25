import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { openrouter } from '@openrouter/ai-sdk-provider';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { isTestEnvironment } from '../constants';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': openrouter('deepseek/deepseek-r1-0528:free'),
        'chat-model-reasoning': openrouter('deepseek/deepseek-r1-0528:free'),
        'title-model': openrouter('deepseek/deepseek-r1-0528:free'),
        'artifact-model': openrouter('deepseek/deepseek-r1-0528:free'),
      }
    });