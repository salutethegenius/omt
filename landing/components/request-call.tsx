 "use client"

import { useState } from "react"
import { Phone } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const requestCallSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  businessName: z.string().min(2, "Please enter your business name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a phone number."),
  role: z.string().min(1, "Please select an option."),
  revenueRange: z.string().min(1, "Please select a revenue range."),
  services: z
    .array(z.string())
    .min(1, "Please select at least one primary service."),
  description: z
    .string()
    .min(10, "Tell us briefly what you would like help with."),
  preferredDays: z.array(z.string()).optional(),
  bestTimeWindow: z.string().optional(),
  relationshipType: z.string().min(1, "Please select one option."),
})

type RequestCallValues = z.infer<typeof requestCallSchema>

export function RequestCall() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<RequestCallValues>({
    resolver: zodResolver(requestCallSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      role: "",
      revenueRange: "",
      services: [],
      description: "",
      preferredDays: [],
      bestTimeWindow: "",
      relationshipType: "",
    },
  })

  async function onSubmit(values: RequestCallValues) {
    try {
      setSubmitting(true)
      setSubmitError(null)

      const res = await fetch("/api/request-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.")
      }

      setSubmitted(true)
      form.reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#F8F7F4] py-24 lg:py-32" // Warm White
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Book An Appointment
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
            Tell Us About Your Business
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            Tell us a little about your business and what you need. We review
            each request personally and follow up to schedule a time that works.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border lg:p-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green/10 text-green">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                Thank you. We&apos;ve received your request.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                We&apos;ll review your information and contact you to confirm a
                time that works with your schedule.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Section A: Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Basic Information
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormDescription>
                            We will use this number when returning your call.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Section B: About Your Business */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    About Your Business
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What best describes you?</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select one" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="small-business-owner">
                                  Small business owner
                                </SelectItem>
                                <SelectItem value="self-employed-professional">
                                  Self employed professional
                                </SelectItem>
                                <SelectItem value="independent-contractor">
                                  Independent contractor
                                </SelectItem>
                                <SelectItem value="new-business-forming">
                                  New business forming
                                </SelectItem>
                                <SelectItem value="transportation-operator">
                                  Transportation operator
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="revenueRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Annual Revenue Range</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-100k">
                                  Under 100k
                                </SelectItem>
                                <SelectItem value="100k-250k">
                                  100k to 250k
                                </SelectItem>
                                <SelectItem value="250k-1m">
                                  250k to 1M
                                </SelectItem>
                                <SelectItem value="1m-plus">1M+</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Section C: What You Need */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    What You Need
                  </h3>
                  <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                      <FormItem>
                        <FormLabel>Primary Service Needed</FormLabel>
                        <div className="mt-2 grid gap-3 md:grid-cols-2">
                          {[
                            "Business tax filing",
                            "Bookkeeping support",
                            "Payroll services",
                            "Sales tax reporting",
                            "2290 filing",
                            "New business setup",
                            "Ongoing advisory",
                            "Other",
                          ].map((service) => (
                            <FormField
                              key={service}
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                const value = service
                                const checked = field.value?.includes(value)
                                return (
                                  <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-md border border-border bg-gray-50 px-3 py-2">
                                    <FormControl>
                                      <Checkbox
                                        checked={checked}
                                        onCheckedChange={(isChecked) => {
                                          if (isChecked) {
                                            field.onChange([
                                              ...(field.value ?? []),
                                              value,
                                            ])
                                          } else {
                                            field.onChange(
                                              (field.value ?? []).filter(
                                                (v: string) => v !== value
                                              )
                                            )
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <div className="space-y-0.5">
                                      <span className="text-sm text-gray-700">
                                        {service}
                                      </span>
                                    </div>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us briefly what you would like help with."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The more detail you provide, the better we can prepare
                          before speaking with you.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section D: Call Preferences */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Call Preferences
                  </h3>
                  <FormField
                    control={form.control}
                    name="preferredDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Days</FormLabel>
                        <div className="mt-2 flex flex-wrap gap-3">
                          {["Weekdays", "Mornings", "Afternoons"].map(
                            (option) => {
                              const value = option.toLowerCase()
                              const checked = field.value?.includes(value)
                              return (
                                <label
                                  key={option}
                                  className="inline-flex items-center gap-2 rounded-full border border-border bg-gray-50 px-3 py-1.5 text-sm text-gray-700"
                                >
                                  <Checkbox
                                    checked={checked}
                                    onCheckedChange={(isChecked) => {
                                      if (isChecked) {
                                        field.onChange([
                                          ...(field.value ?? []),
                                          value,
                                        ])
                                      } else {
                                        field.onChange(
                                          (field.value ?? []).filter(
                                            (v: string) => v !== value
                                          )
                                        )
                                      }
                                    }}
                                  />
                                  <span>{option}</span>
                                </label>
                              )
                            }
                          )}
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bestTimeWindow"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Best Time Window</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="For example: Weekday afternoons between 2–4pm"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          We will confirm a time after reviewing your request.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Pre-qualification: Relationship type */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    How We Can Support You
                  </h3>
                  <FormField
                    control={form.control}
                    name="relationshipType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Are you looking for:</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid gap-3 md:grid-cols-3"
                          >
                            <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-gray-50 px-3 py-2 text-sm text-gray-700">
                              <RadioGroupItem value="one-time-filing" />
                              <span>One time filing support</span>
                            </label>
                            <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-gray-50 px-3 py-2 text-sm text-gray-700">
                              <RadioGroupItem value="ongoing-accounting" />
                              <span>Ongoing accounting support</span>
                            </label>
                            <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-gray-50 px-3 py-2 text-sm text-gray-700">
                              <RadioGroupItem value="long-term-advisory" />
                              <span>Long term advisory relationship</span>
                            </label>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-destructive">{submitError}</p>
                )}

                <div className="space-y-2">
                  <Button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-green px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-green-dark"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Book An Appointment"}
                  </Button>
                  <p className="text-sm text-gray-400">
                    We respond to serious business inquiries within one business
                    day.
                  </p>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  )
}
