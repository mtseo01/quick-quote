<template>
  <div><base-button @click="makePdf">make pdf</base-button></div>
</template>
<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { getQuotation } from '@/api/quotation';
import { _fonts } from '@/utils/font';
import { formatter } from '@/utils/formatter';
export default {
  components: {},
  data() {
    return {
      quoteNumber: '',
      quoteDate: '',
      quoteTitle: '',
      amount: '',
      client: {
        companyName: '',
        clientName: '',
        companyRegiNum: '',
        email: '',
        telephoneNum: '',
        companyAddress: '',
        _id: '',
      },
      user: {
        userId: '',
        userName: '',
        email: '',
        companyName: '',
        companyRegiNum: '',
        telephoneNum: '',
        companyAddress: '',
        businessType: '',
        businessItem: '',
      },
      products: [],
      note: '',
    };
  },
  setup() {},
  created() {
    this.fetch();
  },
  mounted() {},
  unmounted() {},
  methods: {
    makePdf() {
      let doc = new jsPDF('p', 'mm', 'a4');
      // const MARGIN_SIZE = 10;
      doc.addFileToVFS('malgun.ttf', _fonts); //_fonts 변수는 Base64 형태로 변환된 내용입니다.
      doc.addFont('malgun.ttf', 'malgun', 'normal');
      doc.setFont('malgun');
      doc.setFontSize(10);
      // 박스
      doc.setDrawColor(255);
      doc.setFillColor(255, 204, 204);
      // startX, startY, x, y, border-radius
      doc.roundedRect(13, 14, 45, 12, 2, 2, 'FD');
      // 수신인 박스
      // doc.roundedRect(13, 32, 22.5, 6, 2, 2, 'FD');
      doc.setFillColor(232, 222, 211);
      doc.rect(13, 37, 80, 38, 'FD');
      // 공급자 박스
      doc.setFillColor(232, 222, 211);
      doc.rect(118, 37, 80, 38, 'FD');

      // 견적 정보
      doc.text(15, 18, `No. ${this.quoteNumber}`);
      doc.text(15, 24, `견적일자. ${this.quoteDate}`);
      // 수신인
      doc.text(15, 36, `수신인`);
      doc.text(15, 42, `상호 : ${this.client.companyName}`);
      doc.text(15, 48, `사업자등록번호 : ${this.client.companyRegiNum}`);
      doc.text(15, 54, `주소 : 서울특별시 강남구 스타일9길 30`);
      doc.text(15, 60, `담당자 : 김필승`);
      doc.text(15, 66, `이메일 : vitory.kim@gmail.com`);
      doc.text(15, 72, `전화번호 : 010-7777-8888`);
      // 공급자
      doc.text(120, 36, `공급자`);
      doc.text(120, 42, `상호 : ${this.user.companyName}`);
      doc.text(120, 48, `사업자등록번호 : ${this.user.companyRegiNum}`);
      doc.text(120, 54, `전화번호 : ${this.user.telephoneNum}`);
      doc.text(120, 60, `담당자 : ${this.user.userName}`);
      doc.text(120, 66, `이메일 : ${this.user.email}`);
      doc.text(120, 72, `주소 : ${this.user.companyAddress}`);
      doc.text(15, 84, `견적 금액 : ${formatter.format(this.amount)}`);
      autoTable(doc, {
        styles: { font: 'malgun', fontStyle: 'normal' },
        margin: { top: 5 },
        startY: 95.5,
        head: [
          [
            'Product',
            'Quantity',
            'Unit.P',
            'VAT(%)',
            'Price',
            'Tax',
            'SubTotal',
          ],
        ],
        body: this.products,
      });

      doc.save('web.pdf');
      // doc.html(document.querySelector('#'), {});
    },
    async fetch() {
      const id = this.$route.params.id;
      try {
        const { data } = await getQuotation(id);
        console.log(data.doc);
        this.user = data.doc.user;
        data.doc.products.forEach(e => {
          this.products.push([
            e.name,
            e.quantity.toLocaleString('ko-KR'),
            e.unitPrice.toLocaleString('ko-KR'),
            e.rate,
            e.price.toLocaleString('ko-KR'),
            e.tax.toLocaleString('ko-KR'),
            e.subTotal.toLocaleString('ko-KR'),
          ]);
        });
        this.client = data.doc.client;
        this.note = data.doc.note;
        this.quoteNumber = data.doc.quoteNumber;
        this.quoteDate = data.doc.quoteDate;
        this.quoteTitle = data.doc.quoteTitle;
        this.amount = data.doc.amount;
      } catch (err) {
        console.log(err.response.data.doc);
      }
    },
  },
};
</script>
