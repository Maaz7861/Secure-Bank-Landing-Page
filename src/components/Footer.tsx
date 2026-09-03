export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">SIA</h3>
            <p className="text-sm text-muted-foreground">
              Secure United Urban Credit Co-operative Society Ltd.
            </p>
            <p className="text-sm text-muted-foreground">
              Reg No: 1234656789
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Savings Account</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Current Account</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fixed Deposit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recurring Deposit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Branches</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SIA Mitra</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Helpline</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Grievance Redressal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Downloads & Forms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-xs text-muted-foreground space-y-2">
          <p>
            Rates are subject to change without prior notice.
          </p>
          <p>
            Interest rates, payout periods, premature withdrawal terms and all other conditions are governed by the society&apos;s approved deposit scheme and applicable banking/co-operative regulations. Premature withdrawal penalties attract 18% GST.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
            <p>© 2026 Secure United Urban Credit Co-operative Society Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
