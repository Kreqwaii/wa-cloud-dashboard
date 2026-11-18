(() => {
  'use strict';

  const TAB_TITLES = {
    campaigns: 'Campaigns',
    contacts: 'Contacts & CSV Import',
    templates: 'Message Templates',
    inbox: 'Replies Inbox',
    settings: 'Cloud API Settings',
  };

  const state = {
    activeTab: 'campaigns',
    campaigns: [
      {
        name: 'Spring Stock Update',
        template: 'seasonal_restock_en',
        segment: 'Wholesale',
        schedule: 'Today, 09:30 UTC',
        sent: 1240,
        delivered: 1218,
        read: 1042,
        replies: 84,
        status: 'Completed',
      },
      {
        name: 'Invoice Payment Reminder',
        template: 'order_dispatch_v2',
        segment: 'VIP',
        schedule: 'Today, 14:00 UTC',
        sent: 480,
        delivered: 472,
        read: 419,
        replies: 37,
        status: 'Running',
      },
      {
        name: 'VIP Early Access',
        template: 'seasonal_restock_en',
        segment: 'VIP',
        schedule: 'Tomorrow, 10:00 UTC',
        sent: 0,
        delivered: 0,
        read: 0,
        replies: 0,
        status: 'Scheduled',
      },
      {
        name: 'Abandoned Quote Follow-up',
        template: 'appointment_reminder',
        segment: 'Lead',
        schedule: 'Yesterday, 16:15 UTC',
        sent: 620,
        delivered: 598,
        read: 486,
        replies: 52,
        status: 'Completed',
      },
    ],
    contacts: [
      { name: 'Oliver Bennett', phone: '+447700900412', company: 'Northbridge Logistics', segment: 'VIP', source: 'Web Checkout' },
      { name: 'Sophie Laurent', phone: '+33612345678', company: 'Atelier Lyon', segment: 'Wholesale', source: 'CSV Batch' },
      { name: 'Marcus Weber', phone: '+491712345678', company: 'RheinTech GmbH', segment: 'Wholesale', source: 'CSV Batch' },
      { name: 'Elena Rossi', phone: '+393471234567', company: 'Milano Trade Co.', segment: 'Lead', source: 'Web Checkout' },
      { name: 'Liam O’Connor', phone: '+353871234567', company: 'Emerald Supply', segment: 'VIP', source: 'Web Checkout' },
      { name: 'Hannah Brooks', phone: '+14155550194', company: 'Pacific Retail', segment: 'Lead', source: 'CSV Batch' },
      { name: 'Daniel Vance', phone: '+12125550148', company: 'Vance & Co.', segment: 'VIP', source: 'Web Checkout' },
      { name: 'Clara Lindqvist', phone: '+46701234567', company: 'Nordic Goods AB', segment: 'Wholesale', source: 'CSV Batch' },
    ],
    templates: [
      {
        id: 'order_dispatch_v2',
        name: 'order_dispatch_v2',
        category: 'UTILITY',
        status: 'Approved',
        body: 'Hello {{1}}, your order {{2}} has been dispatched via DHL Express. Track it anytime in your client portal.',
      },
      {
        id: 'seasonal_restock_en',
        name: 'seasonal_restock_en',
        category: 'MARKETING',
        status: 'Approved',
        body: 'Hi {{1}}, our Q2 wholesale catalog is now live! Use partner code {{2}} for priority allocation before Friday.',
      },
      {
        id: 'appointment_reminder',
        name: 'appointment_reminder',
        category: 'UTILITY',
        status: 'Approved',
        body: 'Hi {{1}}, this is a reminder for your onboarding call scheduled at {{2}}. Reply RESCHEDULE if you need a new slot.',
      },
    ],
    selectedTemplateId: 'order_dispatch_v2',
    threads: [
      {
        id: 't1',
        name: 'Oliver Bennett',
        phone: '+447700900412',
        company: 'Northbridge Logistics',
        windowLeft: '21h 14m',
        unread: 2,
        messages: [
          { dir: 'outgoing', text: 'Hello Oliver, your order #NB-4092 has been dispatched via DHL Express.', time: '09:32' },
          { dir: 'incoming', text: 'Thanks! Can we add 20 more units to next week’s shipment?', time: '09:41' },
          { dir: 'incoming', text: 'Also please send the updated commercial invoice.', time: '09:42' },
        ],
      },
      {
        id: 't2',
        name: 'Sophie Laurent',
        phone: '+33612345678',
        company: 'Atelier Lyon',
        windowLeft: '18h 05m',
        unread: 0,
        messages: [
          { dir: 'outgoing', text: 'Hi Sophie, our Q2 wholesale catalog is now live!', time: 'Yesterday' },
          { dir: 'incoming', text: 'Received, we are reviewing the pricing tiers today.', time: '10:15' },
        ],
      },
      {
        id: 't3',
        name: 'Marcus Weber',
        phone: '+491712345678',
        company: 'RheinTech GmbH',
        windowLeft: '11h 40m',
        unread: 1,
        messages: [
          { dir: 'incoming', text: 'Hi, is SKU-8841 back in stock for EU delivery?', time: '11:04' },
        ],
      },
      {
        id: 't4',
        name: 'Hannah Brooks',
        phone: '+14155550194',
        company: 'Pacific Retail',
        windowLeft: '04h 52m',
        unread: 0,
        messages: [
          { dir: 'outgoing', text: 'Hi Hannah, reminder for your onboarding call scheduled at 15:00 UTC.', time: '08:00' },
          { dir: 'incoming', text: 'Confirmed, see you then!', time: '08:12' },
        ],
      },
    ],
    activeThreadId: 't1',
    webhookLogs: [
      {
        ts: '2025-05-12T09:42:11.204Z',
        event: 'POST /webhooks/whatsapp -> 200 OK',
        payload: {
          object: 'whatsapp_business_account',
          api_version: 'v21.0',
          entry: [{ id: '104928174920112', changes: [{ field: 'messages', value: { statuses: [{ id: 'wamid.HBgLNDE3OTAwOTAwNDEyFQIAERgSQkQ2RjA2', status: 'read' }] } }] }],
        },
      },
      {
        ts: '2025-05-12T09:41:03.881Z',
        event: 'POST /webhooks/whatsapp -> 200 OK',
        payload: {
          object: 'whatsapp_business_account',
          api_version: 'v21.0',
          entry: [{ id: '104928174920112', changes: [{ field: 'messages', value: { messages: [{ from: '447700900412', id: 'wamid.HBgLNDE3OTAwOTAwNDEyFQIAERgSOTk4QTEy', type: 'text' }] } }] }],
        },
      },
    ],
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function switchTab(tabName) {
    if (!TAB_TITLES[tabName]) return;
    state.activeTab = tabName;

    $$('button.nav-item[data-tab]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.tab === tabName);
    });

    $$('section.tab-panel').forEach((panel) => {
      panel.classList.toggle('is-active', panel.id === `tab-${tabName}`);
    });

    const pageTitle = $('#page-title');
    if (pageTitle) pageTitle.textContent = TAB_TITLES[tabName];
  }

  function renderCampaigns() {
    const totals = state.campaigns.reduce(
      (acc, c) => {
        acc.sent += c.sent;
        acc.delivered += c.delivered;
        acc.read += c.read;
        acc.replies += c.replies;
        return acc;
      },
      { sent: 0, delivered: 0, read: 0, replies: 0 }
    );

    const setVal = (id, val) => {
      const el = $(id);
      if (el) el.textContent = val.toLocaleString('en-US');
    };
    const readRateTotal = totals.sent > 0 ? ((totals.read / totals.sent) * 100).toFixed(1) : '0.0';
    setVal('#stat-sent', totals.sent);
    setVal('#stat-delivered', totals.delivered);
    const readEl = $('#stat-read');
    if (readEl) readEl.textContent = `${readRateTotal}%`;
    setVal('#stat-replies', totals.replies);

    const tbody = $('#campaigns-tbody');
    if (!tbody) return;

    tbody.innerHTML = state.campaigns
      .map((c) => {
        const delPct = c.sent > 0 ? Math.round((c.delivered / c.sent) * 100) : 0;
        const readPct = c.sent > 0 ? Math.round((c.read / c.sent) * 100) : 0;
        const badgeClass =
          c.status === 'Completed'
            ? 'badge-ok'
            : c.status === 'Running'
              ? 'badge-running'
              : 'badge-scheduled';
        const funnelLabel =
          c.sent > 0
            ? `${c.sent.toLocaleString('en-US')} sent · ${delPct}% deliv · ${readPct}% read`
            : 'Queued for dispatch';

        return `
          <tr>
            <td><strong>${escapeHtml(c.name)}</strong></td>
            <td><code class="code-chip">${escapeHtml(c.template)}</code></td>
            <td><span class="badge badge-scheduled">${escapeHtml(c.segment)}</span></td>
            <td class="tabular muted">${escapeHtml(c.schedule)}</td>
            <td>
              <div class="funnel-cell">
                <span class="tabular funnel-text">${funnelLabel}</span>
                <div class="progress-bar"><span style="width:${readPct}%"></span></div>
              </div>
            </td>
            <td><span class="badge ${badgeClass}">${escapeHtml(c.status)}</span></td>
          </tr>
        `;
      })
      .join('');
  }

  function initCampaignModal() {
    const modal = $('#campaign-modal');
    const btnNew = $('#btn-new-campaign');
    const btnCancel = $('#camp-cancel');
    const btnSubmit = $('#camp-submit');

    if (btnNew && modal) {
      btnNew.addEventListener('click', () => {
        switchTab('campaigns');
        modal.hidden = false;
      });
    }

    if (btnCancel && modal) {
      btnCancel.addEventListener('click', () => {
        modal.hidden = true;
      });
    }

    if (btnSubmit && modal) {
      btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const nameInput = $('#camp-name');
        const tplInput = $('#camp-template');
        const segInput = $('#camp-segment');
        const schedInput = $('#camp-schedule');

        const name = nameInput ? nameInput.value.trim() : '';
        if (!name) {
          if (nameInput) nameInput.focus();
          return;
        }

        state.campaigns.unshift({
          name,
          template: tplInput ? tplInput.value : 'order_dispatch_v2',
          segment: segInput ? segInput.value : 'VIP',
          schedule: schedInput && schedInput.value.trim() ? schedInput.value.trim() : 'Scheduled',
          sent: 0,
          delivered: 0,
          read: 0,
          replies: 0,
          status: 'Scheduled',
        });

        if (nameInput) nameInput.value = '';
        if (schedInput) schedInput.value = '';
        modal.hidden = true;
        renderCampaigns();
      });
    }
  }

  function renderContacts() {
    const search = ($('#contact-search')?.value || '').trim().toLowerCase();
    const tag = $('#contact-tag-filter')?.value || 'all';

    const filtered = state.contacts.filter((c) => {
      const matchesTag = tag.toLowerCase() === 'all' || c.segment === tag;
      const matchesSearch =
        !search ||
        c.name.toLowerCase().includes(search) ||
        c.phone.toLowerCase().includes(search) ||
        c.company.toLowerCase().includes(search);
      return matchesTag && matchesSearch;
    });

    const countEl = $('#contacts-count');
    if (countEl) countEl.textContent = `${filtered.length} contacts`;

    const tbody = $('#contacts-tbody');
    if (!tbody) return;

    tbody.innerHTML = filtered
      .map(
        (c) => `
        <tr>
          <td><strong>${escapeHtml(c.name)}</strong></td>
          <td><code>${escapeHtml(c.phone)}</code></td>
          <td>${escapeHtml(c.company)}</td>
          <td><span class="badge">${escapeHtml(c.segment)}</span></td>
          <td class="muted">${escapeHtml(c.source)}</td>
        </tr>
      `
      )
      .join('');
  }

  function parseCsvAndAdd(csvText, sourceLabel) {
    const lines = csvText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    let added = 0;
    lines.forEach((line, idx) => {
      const parts = line.split(',').map((p) => p.trim());
      if (parts.length < 2) return;
      if (idx === 0 && parts[0].toLowerCase() === 'name') return;

      const [name, phone, company = 'Imported Lead', segment = 'Lead'] = parts;
      if (!name || !phone) return;
      state.contacts.unshift({
        name,
        phone,
        company,
        segment,
        source: sourceLabel,
      });
      added += 1;
    });

    if (added > 0) renderContacts();
  }

  function initContacts() {
    $('#contact-search')?.addEventListener('input', renderContacts);
    $('#contact-tag-filter')?.addEventListener('change', renderContacts);

    const fileInput = $('#csv-file-input');
    $('#btn-upload-csv')?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        parseCsvAndAdd(String(reader.result || ''), 'CSV Batch');
        fileInput.value = '';
      };
      reader.readAsText(file);
    });

    $('#btn-load-sample-csv')?.addEventListener('click', () => {
      const sampleCsv = [
        'Name,Phone,Company,Segment',
        'Amelia Foster,+447700900811,Thames Wholesale,Wholesale',
        'Lucas Meyer,+491719988776,Berlin Hardware,VIP',
        'Chloe Dubois,+33698765432,Maison Nord,Lead',
        'Noah Jenkins,+14155550177,Bay Area Supply,Wholesale',
        'Sofia Conti,+393479988112,Conti Imports,VIP',
        'Ethan Wright,+12125550133,Wright Logistics,Lead',
      ].join('\n');
      parseCsvAndAdd(sampleCsv, 'CSV Batch');
    });

    renderContacts();
  }

  function updateTemplatePreview() {
    const body = $('#tpl-body')?.value || '';
    const v1 = $('#tpl-var-1')?.value || '{{1}}';
    const v2 = $('#tpl-var-2')?.value || '{{2}}';
    const preview = $('#tpl-preview-text');
    if (preview) {
      preview.textContent = body.replace(/\{\{1\}\}/g, v1).replace(/\{\{2\}\}/g, v2);
    }
  }

  function selectTemplate(id) {
    const tpl = state.templates.find((t) => t.id === id);
    if (!tpl) return;
    state.selectedTemplateId = id;

    if ($('#tpl-name')) $('#tpl-name').value = tpl.name;
    if ($('#tpl-category')) $('#tpl-category').value = tpl.category;
    if ($('#tpl-body')) $('#tpl-body').value = tpl.body;

    renderTemplatesList();
    updateTemplatePreview();
  }

  function renderTemplatesList() {
    const list = $('#templates-list');
    if (!list) return;

    list.innerHTML = state.templates
      .map(
        (t) => `
        <button type="button" class="template-item ${t.id === state.selectedTemplateId ? 'is-active' : ''}" data-tpl-id="${escapeHtml(t.id)}">
          <div class="template-item-title"><strong>${escapeHtml(t.name)}</strong></div>
          <div class="template-item-meta">
            <span class="badge">${escapeHtml(t.category)}</span>
            <span class="badge badge-success">${escapeHtml(t.status)}</span>
          </div>
        </button>
      `
      )
      .join('');

    $$('.template-item', list).forEach((btn) => {
      btn.addEventListener('click', () => selectTemplate(btn.dataset.tplId));
    });
  }

  function initTemplates() {
    $('#tpl-body')?.addEventListener('input', updateTemplatePreview);
    $('#tpl-var-1')?.addEventListener('input', updateTemplatePreview);
    $('#tpl-var-2')?.addEventListener('input', updateTemplatePreview);

    $('#btn-save-template')?.addEventListener('click', () => {
      const name = ($('#tpl-name')?.value || '').trim();
      const category = $('#tpl-category')?.value || 'UTILITY';
      const body = ($('#tpl-body')?.value || '').trim();
      if (!name || !body) return;

      const existing = state.templates.find((t) => t.id === state.selectedTemplateId || t.name === name);
      if (existing) {
        existing.name = name;
        existing.category = category;
        existing.body = body;
        state.selectedTemplateId = existing.id;
      } else {
        const newId = name.toLowerCase().replace(/[^a-z0-9_]+/g, '_') || `tpl_${Date.now()}`;
        state.templates.unshift({
          id: newId,
          name,
          category,
          status: 'Approved',
          body,
        });
        state.selectedTemplateId = newId;
      }
      renderTemplatesList();
      updateTemplatePreview();
    });

    selectTemplate(state.selectedTemplateId);
  }

  function renderInbox() {
    const threadsEl = $('#inbox-threads');
    const headerEl = $('#inbox-header');
    const messagesEl = $('#inbox-messages');
    const active = state.threads.find((t) => t.id === state.activeThreadId) || state.threads[0];

    if (threadsEl) {
      threadsEl.innerHTML = state.threads
        .map((t) => {
          const lastMsg = t.messages[t.messages.length - 1];
          return `
            <button type="button" class="thread-item ${t.id === active?.id ? 'is-active' : ''}" data-thread-id="${escapeHtml(t.id)}">
              <div class="thread-top">
                <strong>${escapeHtml(t.name)}</strong>
                ${t.unread > 0 ? `<span class="badge badge-info">${t.unread}</span>` : ''}
              </div>
              <div class="muted small">${escapeHtml(t.company)} · ${escapeHtml(t.phone)}</div>
              <div class="thread-preview">${escapeHtml(lastMsg ? lastMsg.text : '')}</div>
            </button>
          `;
        })
        .join('');

      $$('.thread-item', threadsEl).forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = state.threads.find((t) => t.id === btn.dataset.threadId);
          if (target) {
            target.unread = 0;
            state.activeThreadId = target.id;
            renderInbox();
          }
        });
      });
    }

    if (active && headerEl) {
      headerEl.innerHTML = `
        <div>
          <strong>${escapeHtml(active.name)}</strong>
          <span class="muted small">${escapeHtml(active.company)} · ${escapeHtml(active.phone)}</span>
        </div>
        <span class="badge badge-success">24h service window: ${escapeHtml(active.windowLeft)} left</span>
      `;
    }

    if (active && messagesEl) {
      messagesEl.innerHTML = active.messages
        .map(
          (m) => `
          <div class="msg-bubble ${m.dir === 'outgoing' ? 'is-outgoing' : 'is-incoming'}">
            <div class="msg-text">${escapeHtml(m.text)}</div>
            <div class="msg-time">${escapeHtml(m.time)}</div>
          </div>
        `
        )
        .join('');
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  }

  function initInbox() {
    const form = $('#inbox-reply-form');
    const input = $('#inbox-reply-input');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = (input?.value || '').trim();
      if (!text) return;

      const active = state.threads.find((t) => t.id === state.activeThreadId);
      if (!active) return;

      const now = new Date();
      const time = now.toISOString().slice(11, 16);
      active.messages.push({ dir: 'outgoing', text, time });
      if (input) input.value = '';
      renderInbox();
    });

    renderInbox();
  }

  function renderWebhookLog() {
    const logEl = $('#webhook-log');
    if (!logEl) return;
    logEl.textContent = state.webhookLogs
      .map((entry) => `[${entry.ts}] ${entry.event}\n${JSON.stringify(entry.payload, null, 2)}`)
      .join('\n\n');
  }

  function initSettings() {
    $('#btn-test-webhook')?.addEventListener('click', () => {
      const ts = new Date().toISOString();
      const rand = Math.random().toString(36).slice(2, 10).toUpperCase();
      state.webhookLogs.unshift({
        ts,
        event: 'POST /webhooks/whatsapp -> 200 OK',
        payload: {
          object: 'whatsapp_business_account',
          api_version: 'v21.0',
          entry: [
            {
              id: '104928174920112',
              changes: [
                {
                  field: 'messages',
                  value: {
                    statuses: [
                      {
                        id: `wamid.HBgLN${rand}`,
                        status: 'delivered',
                        timestamp: Math.floor(Date.now() / 1000).toString(),
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      });
      renderWebhookLog();
    });

    renderWebhookLog();
  }

  function initNavigation() {
    $$('button.nav-item[data-tab]').forEach((btn) => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    switchTab(state.activeTab);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderCampaigns();
    initCampaignModal();
    initContacts();
    initTemplates();
    initInbox();
    initSettings();
  });
})();
