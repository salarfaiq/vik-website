"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, Calendar, Users, User, Mail, Phone, MessageSquare, Check, Mountain, Home, Tent } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ADVENTURES = [
  { id: "zmt", label: "Zagros Mountain Trail", duration: "13 Days", price: "$2,500", icon: "🏔️", description: "215 km trek across 30+ villages" },
  { id: "summit", label: "Halgurd Summit Expedition", duration: "2-3 Days", price: "From $150", icon: "⛰️", description: "Conquer Iraq's highest peak at 3,607m" },
  { id: "fullday", label: "Halgurd Full-Day Trek", duration: "8-12 Hours", price: "From $150", icon: "🥾", description: "Base camp & alpine meadows" },
  { id: "halfday", label: "Halgurd Half-Day Hike", duration: "4-5 Hours", price: "From $150", icon: "🌿", description: "Green meadows & streams" },
  { id: "sunrise", label: "Halgurd Sunrise Walk", duration: "2-3 Hours", price: "From $150", icon: "🌅", description: "Gentle foothills & wildflowers" },
  { id: "gomi", label: "Gomi Felaw Lake Trek", duration: "Day Trip", price: "From $150", icon: "💎", description: "Kurdistan's highest alpine lake" },
  { id: "iraq", label: "Federal Iraq Grand Tour", duration: "14 Days", price: "$3,800", icon: "🕌", description: "Baghdad to Erbil, 7,000 years of history" },
  { id: "villa", label: "Villa Stay in Choman", duration: "1+ Nights", price: "From $100", icon: "🏡", description: "Mountain villas with pools & views" },
  { id: "private", label: "Private Custom Trip", duration: "Flexible", price: "Custom", icon: "✨", description: "Tailored to your group & pace" },
];

const GROUP_SIZES = ["Solo (1)", "Couple (2)", "Small Group (3-5)", "Group (6-10)", "Large Group (10+)"];

const STEPS = [
  { label: "Adventure", icon: Mountain },
  { label: "Details", icon: Calendar },
  { label: "About You", icon: User },
  { label: "Confirm", icon: Check },
];

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [selectedAdventure, setSelectedAdventure] = useState("");
  const [formData, setFormData] = useState({
    adventure: "",
    dates: "",
    flexibleDates: false,
    groupSize: "",
    accommodation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    hearAbout: "",
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "adventure") setSelectedAdventure(value as string);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed = () => {
    switch (step) {
      case 0: return !!formData.adventure;
      case 1: return !!formData.groupSize;
      case 2: return !!formData.firstName && !!formData.email;
      case 3: return true;
      default: return false;
    }
  };

  const handleSubmit = () => {
    const adventure = ADVENTURES.find((a) => a.id === formData.adventure);
    const message = encodeURIComponent(
      `Hi VIKurdistan! I'd like to book:\n\n` +
      `Adventure: ${adventure?.label}\n` +
      `Preferred Dates: ${formData.dates || "Flexible"}\n` +
      `Group Size: ${formData.groupSize}\n` +
      `Accommodation: ${formData.accommodation || "No preference"}\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Country: ${formData.country || "Not provided"}\n` +
      `${formData.message ? `\nMessage: ${formData.message}` : ""}`
    );
    window.open(`https://wa.me/9647501116377?text=${message}`, "_blank");
  };

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
  };

  const [direction, setDirection] = useState(1);

  const goNext = () => { setDirection(1); nextStep(); };
  const goPrev = () => { setDirection(-1); prevStep(); };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-[var(--vik-storm)]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-[var(--vik-sage)]/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--vik-sage)] mb-2 tracking-wider uppercase">
              Book Your Adventure
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Start Your{" "}
              <span className="text-gradient-sage">Kurdistan Journey</span>
            </h2>
            <p className="text-[var(--foreground)]/45 max-w-lg mx-auto">
              Tell us about your dream trip and we&apos;ll craft the perfect adventure for you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[var(--vik-storm-light)]/10">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <div key={s.label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor: isDone
                            ? "var(--vik-sage)"
                            : isActive
                            ? "var(--vik-sage)"
                            : "transparent",
                        }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                          isDone || isActive
                            ? "border-[var(--vik-sage)]"
                            : "border-[var(--vik-border-storm)]"
                        }`}
                      >
                        {isDone ? (
                          <Check size={16} className="text-white" />
                        ) : (
                          <Icon
                            size={16}
                            className={isActive ? "text-white" : "text-[var(--foreground)]/30"}
                          />
                        )}
                      </motion.div>
                      <span
                        className={`text-[10px] mt-1.5 font-medium ${
                          isActive ? "text-[var(--vik-sage)]" : "text-[var(--foreground)]/25"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className={`w-8 sm:w-16 h-[2px] mx-1 sm:mx-2 -mt-4 transition-colors ${
                          i < step ? "bg-[var(--vik-sage)]" : "bg-[var(--vik-border-storm)]"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form Steps */}
            <div className="min-h-[380px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 0: Choose Adventure */}
                {step === 0 && (
                  <motion.div
                    key="step0"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h3 className="text-lg font-bold mb-1">Choose Your Adventure</h3>
                    <p className="text-sm text-[var(--foreground)]/35 mb-6">What excites you most?</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {ADVENTURES.map((adv) => (
                        <button
                          key={adv.id}
                          onClick={() => updateField("adventure", adv.id)}
                          className={`text-left p-4 rounded-xl border transition-all duration-200 group ${
                            formData.adventure === adv.id
                              ? "border-[var(--vik-sage)] bg-[var(--vik-sage)]/10"
                              : "border-[var(--vik-border-storm)] hover:border-[var(--vik-sage)]/30 bg-transparent"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xl">{adv.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold truncate group-hover:text-[var(--vik-sage)] transition-colors">
                                {adv.label}
                              </div>
                              <div className="text-xs text-[var(--foreground)]/30 mt-0.5">{adv.description}</div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--vik-storm-mid)]/50 text-[var(--foreground)]/40">
                                  {adv.duration}
                                </span>
                                <span className="text-[10px] text-[var(--vik-sage)] font-semibold">{adv.price}</span>
                              </div>
                            </div>
                            {formData.adventure === adv.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-5 h-5 rounded-full bg-[var(--vik-sage)] flex items-center justify-center shrink-0"
                              >
                                <Check size={12} className="text-white" />
                              </motion.div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Trip Details */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h3 className="text-lg font-bold mb-1">Trip Details</h3>
                    <p className="text-sm text-[var(--foreground)]/35 mb-6">When and with whom?</p>

                    <div className="space-y-6">
                      {/* Preferred Dates */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Calendar size={14} className="text-[var(--vik-sage)]" />
                          Preferred Travel Dates
                        </label>
                        <input
                          type="text"
                          value={formData.dates}
                          onChange={(e) => updateField("dates", e.target.value)}
                          placeholder="e.g. March 2026, Summer 2026, or specific dates"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors"
                        />
                        <label className="flex items-center gap-2 mt-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.flexibleDates as boolean}
                            onChange={(e) => updateField("flexibleDates", e.target.checked)}
                            className="rounded accent-[var(--vik-sage)]"
                          />
                          <span className="text-xs text-[var(--foreground)]/35">My dates are flexible</span>
                        </label>
                      </div>

                      {/* Group Size */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Users size={14} className="text-[var(--vik-sage)]" />
                          Group Size
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {GROUP_SIZES.map((size) => (
                            <button
                              key={size}
                              onClick={() => updateField("groupSize", size)}
                              className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                                formData.groupSize === size
                                  ? "border-[var(--vik-sage)] bg-[var(--vik-sage)]/10 text-[var(--vik-sage)]"
                                  : "border-[var(--vik-border-storm)] text-[var(--foreground)]/45 hover:border-[var(--vik-sage)]/30"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Accommodation Preference */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Home size={14} className="text-[var(--vik-sage)]" />
                          Accommodation Preference
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "glamping", label: "Glamping", icon: Tent },
                            { id: "villa", label: "Villa", icon: Home },
                            { id: "homestay", label: "Homestay", icon: Users },
                          ].map((acc) => {
                            const AccIcon = acc.icon;
                            return (
                              <button
                                key={acc.id}
                                onClick={() => updateField("accommodation", acc.id)}
                                className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-sm font-medium transition-all ${
                                  formData.accommodation === acc.id
                                    ? "border-[var(--vik-sage)] bg-[var(--vik-sage)]/10 text-[var(--vik-sage)]"
                                    : "border-[var(--vik-border-storm)] text-[var(--foreground)]/45 hover:border-[var(--vik-sage)]/30"
                                }`}
                              >
                                <AccIcon size={18} />
                                <span className="text-xs">{acc.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: About You */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h3 className="text-lg font-bold mb-1">About You</h3>
                    <p className="text-sm text-[var(--foreground)]/35 mb-6">So we can reach you with the perfect plan.</p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium mb-2">
                            <User size={14} className="text-[var(--vik-sage)]" />
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => updateField("firstName", e.target.value)}
                            placeholder="Omar"
                            className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Last Name</label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => updateField("lastName", e.target.value)}
                            placeholder="Chomani"
                            className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Mail size={14} className="text-[var(--vik-sage)]" />
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium mb-2">
                            <Phone size={14} className="text-[var(--vik-sage)]" />
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                            placeholder="+1 234 567 8900"
                            className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium mb-2">
                            <MapPin size={14} className="text-[var(--vik-sage)]" />
                            Country
                          </label>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) => updateField("country", e.target.value)}
                            placeholder="Where are you from?"
                            className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <MessageSquare size={14} className="text-[var(--vik-sage)]" />
                          Anything else we should know?
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => updateField("message", e.target.value)}
                          placeholder="Special requests, dietary needs, fitness level, questions..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--vik-border-storm)] text-sm placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-[var(--vik-sage)]/40 transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h3 className="text-lg font-bold mb-1">Review & Send</h3>
                    <p className="text-sm text-[var(--foreground)]/35 mb-6">Here&apos;s your trip summary. We&apos;ll respond within 24 hours.</p>

                    <div className="space-y-4">
                      {/* Summary Card */}
                      <div className="rounded-2xl bg-[var(--vik-storm)]/30 border border-[var(--vik-border-storm)] p-5 space-y-4">
                        {/* Adventure */}
                        <div className="flex items-start gap-3">
                          <span className="text-xl">{ADVENTURES.find((a) => a.id === formData.adventure)?.icon}</span>
                          <div>
                            <div className="text-sm font-bold">{ADVENTURES.find((a) => a.id === formData.adventure)?.label}</div>
                            <div className="text-xs text-[var(--foreground)]/35">
                              {ADVENTURES.find((a) => a.id === formData.adventure)?.duration} · {ADVENTURES.find((a) => a.id === formData.adventure)?.price}
                            </div>
                          </div>
                        </div>

                        <div className="h-px bg-[var(--vik-border-storm)]" />

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <div className="text-[var(--foreground)]/25 text-xs mb-0.5">Dates</div>
                            <div className="font-medium">{formData.dates || "Flexible"}</div>
                          </div>
                          <div>
                            <div className="text-[var(--foreground)]/25 text-xs mb-0.5">Group</div>
                            <div className="font-medium">{formData.groupSize || "—"}</div>
                          </div>
                          <div>
                            <div className="text-[var(--foreground)]/25 text-xs mb-0.5">Accommodation</div>
                            <div className="font-medium capitalize">{formData.accommodation || "No preference"}</div>
                          </div>
                          <div>
                            <div className="text-[var(--foreground)]/25 text-xs mb-0.5">Country</div>
                            <div className="font-medium">{formData.country || "—"}</div>
                          </div>
                        </div>

                        <div className="h-px bg-[var(--vik-border-storm)]" />

                        {/* Contact */}
                        <div className="text-sm">
                          <div className="font-semibold">{formData.firstName} {formData.lastName}</div>
                          <div className="text-[var(--foreground)]/40">{formData.email}</div>
                          {formData.phone && <div className="text-[var(--foreground)]/40">{formData.phone}</div>}
                        </div>

                        {formData.message && (
                          <>
                            <div className="h-px bg-[var(--vik-border-storm)]" />
                            <div className="text-sm">
                              <div className="text-[var(--foreground)]/25 text-xs mb-0.5">Notes</div>
                              <div className="text-[var(--foreground)]/55">{formData.message}</div>
                            </div>
                          </>
                        )}
                      </div>

                      <p className="text-xs text-[var(--foreground)]/25 text-center">
                        This will open WhatsApp with your trip details pre-filled. Our team responds within 24 hours. A 30% deposit secures your spot.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--vik-border-storm)]">
              {step > 0 ? (
                <button
                  onClick={goPrev}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--vik-border-storm)] text-sm font-medium text-[var(--foreground)]/55 hover:text-[var(--vik-sage)] hover:border-[var(--vik-sage)]/30 transition-all"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <motion.button
                  onClick={goNext}
                  disabled={!canProceed()}
                  whileHover={canProceed() ? { scale: 1.02 } : {}}
                  whileTap={canProceed() ? { scale: 0.98 } : {}}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    canProceed()
                      ? "bg-gradient-to-r from-[var(--vik-sage-dark)] to-[var(--vik-sage)] text-white hover:shadow-lg hover:shadow-[var(--vik-glow)]"
                      : "bg-[var(--vik-storm-mid)]/50 text-[var(--foreground)]/20 cursor-not-allowed"
                  }`}
                >
                  Continue
                  <ChevronRight size={16} />
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#25D366]/30 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Send via WhatsApp
                </motion.button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
