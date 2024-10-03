import{j as e,c as D,H,r as h,N as se,aq as re,c2 as oe,dt as S,eQ as m,a7 as ne,aO as P,K as r,I as ie,c3 as B}from"./otyn7m3v4o5hjv1m.js";import{W as le,X as ce,eh as de,D as me,aL as ae,av as E,V as ue,ei as A}from"./g98o1hu13svzcy4j.js";import{Y as ee}from"./o7tg2hyicap3122c.js";import{A as pe}from"./mce8jtqsx3bc8cp6.js";import{F as he,q as xe,b0 as fe,T as ye}from"./elwr36cpw46qn2l2.js";import{F as ge,a as $,b as k}from"./bm1h4ww1xyrtfsng.js";import{a as ve,b as be}from"./foyjrxvvu4ldmehu.js";import"./n8ljlp21wilt13tf.js";import"./lw3rrnnb5dxcyypl.js";import"./kgyg817qi2bj4184.js";import"./f9pfhffsv12o27bb.js";import"./busl3phtm15t1ux6.js";import"./kvxptdshjr5uucy7.js";import"./fsddy3bxlesj6ecw.js";import"./bn16pf6j90ncqssc.js";import"./cjjgeojxe84hmy82.js";import"./o197eeud97p1ngrx.js";import"./ohl91zfwkdken7ti.js";import"./itbprcwpx790xl1j.js";import"./g08cpw9vtft4y6ku.js";import"./xe4hexxxyjcii8ft.js";import"./i7fmbdae81b985x0.js";import"./fvmrj8bhjyrxfksq.js";import"./hn32nqznsqfgnwx9.js";import"./guixxmttrchqsmhb.js";import"./hkmla6lmyftf0v53.js";import"./aszamxbvr2a9gk12.js";import"./hlmesjknt93bcxhd.js";import"./kf0px5xsq2h01gfe.js";import"./mdbvzkzbjz7wvyrk.js";import"./mdywhc6vbcew95e2.js";import"./meyujahihr76crrx.js";import"./621y46rkqoaumuwb.js";import"./k9qj1gs8lyamxgck.js";import"./h79fctozd4pirvd4.js";import"./nnjyftwv95b3fulb.js";import"./f6msl6xch9ahw1u0.js";import"./hg4uk436hcqxcqme.js";import"./bkt4td8i9ll1fbc2.js";import"./9z2zy2gm2kabu572.js";import"./ofmu0gkzz86hjmwa.js";import"./b2fmvrixwi0ualqk.js";import"./edfwvzvr1g94roxk.js";import"./cu7i7jyqvstu6net.js";import"./m563ytre28xibbv2.js";function je({className:t,children:o,...n}){return e.jsx(le,{className:t,...n,children:o})}const Ne=({value:t,className:o,label:n,...l})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ce,{id:t,value:t,className:D("h-4 w-4 flex-shrink-0 gap-2 rounded-full border border-token-text-tertiary bg-transparent shadow-sm outline-none hover:bg-token-main-surface-tertiary",o),...l}),e.jsx("label",{htmlFor:t,className:"w-full cursor-pointer",children:n})]}),Me=({className:t,...o})=>e.jsx(de,{className:D("relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-token-text-primary after:content-['']",t),...o}),J={Root:je,Item:Ne,Indicator:Me};function _e({onSelectExample:t}){const o=H(),n=h.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const a=parseInt(l.target.value);t(te[a].spec),n.current.value="label"},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:n,children:[e.jsx("option",{value:"label",children:o.formatMessage(z.examples)}),te.map((l,a)=>e.jsx("option",{value:a,children:o.formatMessage(l.displayName)},a))]})}const Ae={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ke=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: https://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            maximum: 100
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:    
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
    post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      maxItems: 100
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string`,we={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},z=se({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),te=[{displayName:z.weatherExampleTitle,spec:JSON.stringify(Ae,null,2)},{displayName:z.petStoreExampleTitle,spec:ke},{displayName:z.blankExampleTitle,spec:JSON.stringify(we,null,2)}];function Ie({content:t,button:o,onClick:n}){return e.jsxs("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:n,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:t}),e.jsx("div",{className:"w-px bg-token-border-medium"}),o]})}const Se="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt";function j({children:t}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:t})}function Ee({jitPluginTool:t,onUpdateTool:o,onClose:n}){var N,g,d,L,v,O,V,U,C,w,q,x,b,I;const l=H(),[a,f]=h.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:((g=(N=t==null?void 0:t.metadata)==null?void 0:N.auth)==null?void 0:g.client_url)??"",oauthTokenUrlValue:((L=(d=t==null?void 0:t.metadata)==null?void 0:d.auth)==null?void 0:L.authorization_url)??"",oauthScopeValue:((O=(v=t==null?void 0:t.metadata)==null?void 0:v.auth)==null?void 0:O.scope)??"",authTypeValue:((U=(V=t==null?void 0:t.metadata)==null?void 0:V.auth)==null?void 0:U.type)??m.None,httpAuthTypeValue:((w=(C=t==null?void 0:t.metadata)==null?void 0:C.auth)==null?void 0:w.authorization_type)??"basic",customHeaderValue:((x=(q=t==null?void 0:t.metadata)==null?void 0:q.auth)==null?void 0:x.custom_auth_header)??"",tokenExchangeMethodValue:((I=(b=t==null?void 0:t.metadata)==null?void 0:b.auth)==null?void 0:I.token_exchange_method)??"default_post"});function u(i){f(T=>({...T,...i}))}function y(){o(a.authTypeValue===m.None?{type:m.None}:a.authTypeValue===m.OAuth?{type:m.OAuth,client_url:a.oauthAuthUrlValue,authorization_url:a.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:a.oauthScopeValue,token_exchange_method:a.tokenExchangeMethodValue,oauth_client_id:a.oauthClientIdValue,oauth_client_secret:a.oauthClientSecretValue}:{type:m.ServiceHTTP,authorization_type:a.httpAuthTypeValue,custom_auth_header:a.customHeaderValue,api_key:a.apiKeyValue}),n()}return e.jsxs(ie,{type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(P,{color:"primary",onClick:()=>{y()},children:e.jsx(r,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(P,{color:"secondary",onClick:n,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:n,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(J.Root,{onValueChange:i=>{u({authTypeValue:i})},value:a.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(A,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:m.None}),e.jsx(A,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:m.ServiceHTTP}),e.jsx(A,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:m.OAuth})]})]}),a.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(r,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(k,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:a.apiKeyValue,onChange:i=>{u({apiKeyValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(j,{children:e.jsx(r,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(J.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:a.httpAuthTypeValue,required:!0,onValueChange:i=>{u({httpAuthTypeValue:i})},children:[e.jsx(A,{value:"basic",label:"Basic"}),e.jsx(A,{value:"bearer",label:"Bearer"}),e.jsx(A,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),a.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(j,{children:e.jsx(r,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(k,{value:a.customHeaderValue,onChange:i=>{u({customHeaderValue:i.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):a.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(r,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(k,{placeholder:"<HIDDEN>",type:"password",value:a.oauthClientIdValue,onChange:i=>{u({oauthClientIdValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(j,{children:e.jsx(r,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(k,{placeholder:"<HIDDEN>",type:"password",value:a.oauthClientSecretValue,onChange:i=>{u({oauthClientSecretValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(j,{children:e.jsx(r,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(k,{value:a.oauthAuthUrlValue,onChange:i=>{u({oauthAuthUrlValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(j,{children:e.jsx(r,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(k,{value:a.oauthTokenUrlValue,onChange:i=>{u({oauthTokenUrlValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(j,{children:e.jsx(r,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(k,{value:a.oauthScopeValue,onChange:i=>{u({oauthScopeValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(j,{children:e.jsx(r,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(J.Root,{value:a.tokenExchangeMethodValue,required:!0,onValueChange:i=>{u({tokenExchangeMethodValue:i})},children:[e.jsx(A,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(A,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]})]}):null]})}function Ve({onImport:t,onClose:o}){const[n,l]=h.useState(""),[a,f]=h.useState(!1);async function u(){let y;try{y=new URL(n)}catch{return}if(y!=null&&y.hostname){f(!0);try{const N=await ae.fetchOpenAPISpec(n);t(N.content),o()}finally{f(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:n,onChange:y=>{l(y.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(E,{color:"primary",size:"small",loading:a,onClick:u,children:e.jsx(r,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(E,{color:"secondary",size:"small",onClick:o,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function Ce({rootDomain:t,operations:o}){return o==null||o.length===0?e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),o.map(n=>e.jsxs("tr",{className:"border-b border-token-border-light",children:[e.jsx("td",{className:"py-2",children:n.operationName}),e.jsx("td",{className:"py-2 uppercase",children:n.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:n.path}),e.jsx("td",{className:"py-2",children:e.jsx(E,{color:"secondary",onClick:()=>{t&&ve.publish({kind:be.TestGizmoAction,rootDomain:t,operationName:n.operationName})},children:e.jsx(r,{id:"Ag71GQ",defaultMessage:"Test"})})})]},n.operationName))]})})}function Te({validationResponse:t}){const o=H();return e.jsxs("div",{children:[e.jsx($,{label:o.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(Ce,{rootDomain:t.success?t.spec.root_domain:void 0,operations:t.success?t.spec.operations:void 0})]})}function Ge(t){switch(t){case m.None:return B({id:"G9qfIC",defaultMessage:"None"});case m.OAuth:return B({id:"t8MwwT",defaultMessage:"OAuth"});case m.ServiceHTTP:return B({id:"rN0uCi",defaultMessage:"API Key"})}}function kt({currentlyEditingActionDomain:t,gizmoEditorData:o,updateGizmo:n,onClose:l}){var K,W,X,Q,Y;const a=H(),[f,u]=h.useState(t),y=h.useRef(f),N=re(),{data:g}=oe(N==null?void 0:N.getWorkspaceId());h.useEffect(()=>{y.current=f},[f]);const d=(K=o==null?void 0:o.tools)==null?void 0:K.find(s=>s.type===S.JIT_PLUGIN&&s.metadata.domain===f),[L]=h.useState(()=>d==null),v=((W=d==null?void 0:d.metadata)==null?void 0:W.raw_spec)??"",[O,V]=h.useState(!1),[U,C]=h.useState(!1),[w,q]=h.useState(!1);function x(s){n(p=>({...p,tools:d?p.tools.map(c=>c.type===S.JIT_PLUGIN&&c.metadata.domain===f?{...c,metadata:{...c.metadata,...s,json_schema:void 0}}:c):[...p.tools,{type:S.JIT_PLUGIN,metadata:{raw_spec:"",domain:f??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))}const[b,I]=h.useState(),i=o,[T]=h.useState(()=>me(async function(p){var Z;const c=await ae.validateOpenAPISpec(p);I(c);const M=c.success?c.spec.root_domain:void 0;if(M){if(M!==y.current&&((Z=i==null?void 0:i.tools)==null?void 0:Z.find(_=>_.type===S.JIT_PLUGIN&&_.metadata.domain===M))){I({success:!1,errors:[a.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:M})]});return}n(R=>({...R,tools:R.tools.map(_=>_.type===S.JIT_PLUGIN&&_.metadata.domain===y.current?{..._,metadata:{..._.metadata,domain:M}}:_)})),u(M)}if(c.success&&c.known_auth&&c.known_privacy_policy&&d){const R={type:m.OAuth,...c.known_auth};ne(d.metadata.auth,R)||x({auth:{type:m.OAuth,...c.known_auth}}),d.metadata.privacy_policy_url!==c.known_privacy_policy&&x({privacy_policy_url:c.known_privacy_policy})}},1e3)),G=b!=null?b.success?b.warnings:b.errors:void 0;h.useEffect(()=>{v===""?(I(void 0),T.cancel()):T(v)},[T,v]);const F=s=>{try{x({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{x({raw_spec:ee.stringify(ee.parse(s),{lineWidth:120,indent:2})})}catch{}}};return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute left-0 top-6",children:e.jsx(P,{color:"secondary",onClick:l,icon:he})}),d!=null&&e.jsx("div",{className:"absolute right-0 top-6",children:e.jsx(P,{color:"secondary",onClick:()=>{window.confirm("Are you sure you want to delete this action?")&&(n(s=>({...s,tools:s.tools.filter(p=>!(p.type===S.JIT_PLUGIN&&p.metadata.domain===f))})),l())},className:"text-red-500",children:e.jsx(xe,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:L?e.jsx(r,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(r,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(r,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(ge,{className:"relative",children:[e.jsx($,{label:a.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(Ie,{onClick:()=>{V(!0)},content:a.formatMessage(Ge(((Q=(X=d==null?void 0:d.metadata)==null?void 0:X.auth)==null?void 0:Q.type)??m.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(fe,{className:"icon-sm"})})}),O&&e.jsx(Ee,{jitPluginTool:d,onUpdateTool:s=>{switch(s.type){case m.None:{x({auth:{type:m.None}});break}case m.OAuth:{const{oauth_client_id:p,oauth_client_secret:c,...M}=s;x({auth:M,oauth_client_id:p,oauth_client_secret:c});break}case m.ServiceHTTP:{const{api_key:p,...c}=s;x({auth:c,api_key:p});break}}},onClose:()=>{V(!1)}})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"font-semibold text-token-text-primary",children:e.jsx(r,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:U?e.jsx(Ve,{onImport:s=>{F(s)},onClose:()=>{C(!1)}}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{color:"secondary",size:"small",onClick:()=>{C(!0)},children:e.jsx(r,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(_e,{onSelectExample:s=>{x({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:v,onChange:s=>{x({raw_spec:s.target.value})},spellCheck:!1,placeholder:a.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),e.jsx("div",{className:"absolute bottom-2 right-2 flex gap-2",children:v!==""?e.jsx(E,{onClick:()=>{F(v)},children:e.jsx(r,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(E,{as:"a",to:Se,openNewTab:!0,size:"small",children:[e.jsx(r,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(ye,{className:"icon-md"})]})})]}),G!=null&&(G==null?void 0:G.length)>0&&e.jsx("div",{className:"border-t border-token-border-light p-2 text-red-500",children:G.map((s,p)=>e.jsx("div",{children:s},p))})]})]}),b!=null&&e.jsx(Te,{validationResponse:b}),(g==null?void 0:g.allowed_custom_actions_domains)!=null&&((g==null?void 0:g.allowed_custom_actions_domains.length)>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>q(!w),children:[e.jsx(r,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(pe,{className:"inline",checked:w})]}),e.jsx("ul",{className:D("list-disc ps-4",!w&&"hidden"),children:g==null?void 0:g.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(r,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx($,{label:a.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(ue,{name:"privacyPolicyUrl",value:((Y=d==null?void 0:d.metadata)==null?void 0:Y.privacy_policy_url)??"",placeholder:"https://app.example.com/privacy",onChange:s=>{x({privacy_policy_url:s.target.value})}})]})]})}export{kt as GizmoActionsEditor};
//# sourceMappingURL=dy3js227nxvg0bg7.js.map
